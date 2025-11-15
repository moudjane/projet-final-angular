import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FilterBar, FilterType } from '../../components/filter-bar/filter-bar';
import { PostCard } from '../../components/post-card/post-card';
import { firstValueFrom, Subscription } from 'rxjs';
import {
  GetPostsQuery,
  GetPostsQueryVariables,
} from '../../../../graphql/generated';
import { Post } from '../../core/interfaces/post';
import { ApiService } from '../../core/services/service-api';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FilterBar, PostCard],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Articles {
  private readonly router = inject(Router);
  private readonly api = inject(ApiService);

  readonly postsLoading = signal(false);
  readonly postsError = signal<string | null>(null);

  private querySub?: Subscription;
  private watchedQuery?: ReturnType<ApiService['watchPosts']>;

  readonly activeFilter = signal<FilterType>('CREATED_AT');
  readonly posts = signal<Post[]>([]);

  readonly sortedPosts = computed(() => {
    const list = [...this.posts()];
    const filter = this.activeFilter();
    if (filter === 'CREATED_AT') {
      return list.sort(
        (a, b) =>
          new Date(b.createdAt ?? '').getTime() -
          new Date(a.createdAt ?? '').getTime()
      );
    }
    return list.sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));
  });

  handleFilterChange(filter: FilterType) {
    this.activeFilter.set(filter);
    const orderByField = filter === 'CREATED_AT' ? 'CREATED_AT' : 'LIKES';

    const variables: GetPostsQueryVariables = {
      filter: {
        author: null,
        orderBy: {
          field: orderByField as any,
          direction: 'DESC',
        },
      },
      pagination: { skip: 0, take: 50 },
      category: null,
    };

    this.postsLoading.set(true);
    this.watchedQuery?.refetch(variables)
      .then(() => this.postsLoading.set(false))
      .catch(err => {
        this.postsLoading.set(false);
        this.postsError.set(err?.message ?? String(err));
        console.error('Refetch failed', err);
      });
  }

  async handleUpvote(postId: string) {
    const prev = this.posts();
    const liked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
    if (!liked.includes(postId)) {
      localStorage.setItem('postLikedId', JSON.stringify([...liked, postId]));
    }

    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: ((p.likes as number) || 0) + 1 } : p
      )
    );

    try {
      await firstValueFrom(this.api.likePost(postId));
    } catch (err) {
      const currentLiked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
      localStorage.setItem('postLikedId', JSON.stringify(currentLiked.filter(id => id !== postId)));
      this.posts.set(prev);
      console.error('likePost mutation failed', err);
    }
  }

  async handleRemoveUpvote(postId: string) {
    const prev = this.posts();
    const liked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
    localStorage.setItem('postLikedId', JSON.stringify(liked.filter(id => id !== postId)));

    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: Math.max(((p.likes as number) || 1) - 1, 0) } : p
      )
    );

    try {
      await firstValueFrom(this.api.unlikePost(postId));
    } catch (err) {
      localStorage.setItem('postLikedId', JSON.stringify(liked));
      this.posts.set(prev);
      console.error('unlikePost mutation failed', err);
    }
  }

  handleViewDetails(postId: string) {
    this.router.navigate(['/posts', postId]);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    this.querySub?.unsubscribe();
  }

  private loadPosts() {
    this.postsLoading.set(true);
    this.postsError.set(null);

    const orderByField = this.activeFilter() === 'CREATED_AT' ? 'CREATED_AT' : 'LIKES';

    const variables: GetPostsQueryVariables = {
      filter: {
        author: null,
        orderBy: {
          field: orderByField as any,
          direction: 'DESC',
        },
      },
      pagination: { skip: 0, take: 50 },
      category: null,
    };

    const watched = this.api.watchPosts(variables);
    this.watchedQuery = watched;

    this.querySub = watched.valueChanges.subscribe({
      next: ({ data, loading }) => {
        this.postsLoading.set(!!loading);
        const items = (data?.getPosts ?? [])
          .filter((p): p is NonNullable<typeof p> & { id: string } => p?.id != null)
          .map(p => ({
            id: p.id,
            title: p.title ?? '',
            createdAt: p.createdAt,
            authorId: p.authorId,
            authorName: p.authorName,
            content: p.content,
            likes: p.likes ?? 0,
          } as Post));
        this.posts.set(items);
      },
      error: (err) => {
        this.postsLoading.set(false);
        this.postsError.set((err as any)?.message ?? String(err));
        console.error('Failed to load posts', err);
      },
    });
  }
}
