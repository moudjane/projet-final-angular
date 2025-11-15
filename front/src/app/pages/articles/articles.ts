import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { FilterBar, FilterType } from '../../components/filter-bar/filter-bar';
import { PostCard } from '../../components/post-card/post-card';
import { gql, QueryRef } from 'apollo-angular';
import { firstValueFrom, Subscription } from 'rxjs';
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  LikePostMutation,
  LikePostMutationVariables,
  UnlikePostMutation,
  UnlikePostMutationVariables,
  Post as GqlPost,
  LikePostGQL,
  UnlikePostGQL,
} from '../../../../graphql/generated';
import { Post } from '../../core/interfaces/post';

export const GET_POSTS = gql`
  query GetPosts($filter: PostFilterInput, $pagination: PaginationInput, $category: String) {
    getPosts(filter: $filter, pagination: $pagination, category: $category) {
      id
      title
      createdAt
      authorId
      authorName
      content
      likes
      category
    }
  }
`

export const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId)
  }
`

export const UNLIKE_POST = gql`
  mutation UnlikePost($postId: ID!) {
    unlikePost(postId: $postId)
  }
`

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FilterBar, PostCard],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Articles {
  private readonly router = inject(Router);
  private readonly apollo = inject(Apollo);
  private readonly likeGql = inject(LikePostGQL);
  private readonly unlikeGql = inject(UnlikePostGQL);

  // Loading / error state for the posts query
  readonly postsLoading = signal(false);
  readonly postsError = signal<string | null>(null);

  private querySub?: Subscription;
  private watchedQuery?: QueryRef<GetPostsQuery, GetPostsQueryVariables>;

  // Current active filter ("CREATED_AT" or "LIKES")
  readonly activeFilter = signal<FilterType>('CREATED_AT');

  // List of posts (will be replaced later by real GraphQL data)
  readonly posts = signal<Post[]>([]);

  // Computed list of posts sorted based on the selected filter
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

  // Triggered when FilterBar emits a change event
  handleFilterChange(filter: FilterType) {
    this.activeFilter.set(filter);
    // Refetch the watched query with the new orderBy field
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

    this.postsLoading.set(true);
    this.watchedQuery?.refetch(variables).then(() => this.postsLoading.set(false)).catch(err => {
      this.postsLoading.set(false);
      this.postsError.set(err?.message ?? String(err));
      console.error('Refetch failed', err);
    });
  }

  // Registers a "like" for a post both locally and in localStorage
  async handleUpvote(postId: string) {
    // Call GraphQL mutation likePost(postId) with optimistic UI update
    const prev = this.posts();

    const liked = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    if (!liked.includes(postId)) {
      const updated = [...liked, postId];
      localStorage.setItem('postLikedId', JSON.stringify(updated));
    }

    // Optimistic update locally
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: ((p.likes as number) || 0) + 1 } : p
      )
    );

    try {
      await firstValueFrom(this.likeGql.mutate({ variables: { postId } }));
    } catch (err) {
      // rollback optimistic update and localStorage
      const currentLiked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
      const rolled = currentLiked.filter((id: string) => id !== postId);
      localStorage.setItem('postLikedId', JSON.stringify(rolled));
      this.posts.set(prev);
      console.error('likePost mutation failed', err);
    }
  }

  // Removes a like from localStorage and applies optimistic UI update
  async handleRemoveUpvote(postId: string) {
    // Call GraphQL mutation unlikePost(postId) with optimistic update
    const prev = this.posts();

    const liked = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    const updatedLiked = liked.filter(id => id !== postId);
    localStorage.setItem('postLikedId', JSON.stringify(updatedLiked));

    // Optimistic update
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: Math.max(((p.likes as number) || 1) - 1, 0) } : p
      )
    );

    try {
      await firstValueFrom(this.unlikeGql.mutate({ variables: { postId } }));
    } catch (err) {
      // rollback
      localStorage.setItem('postLikedId', JSON.stringify(liked));
      this.posts.set(prev);
      console.error('unlikePost mutation failed', err);
    }
  }

  // Navigates to post details page
  handleViewDetails(postId: string) {
    this.router.navigate(['/posts', postId]);
  }

  // Load posts when component is created
  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    this.querySub?.unsubscribe();
  }

  private loadPosts() {
    this.postsLoading.set(true);
    this.postsError.set(null);

    // Map the active filter to the GraphQL orderBy input
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

    const watched = this.apollo.watchQuery<GetPostsQuery, GetPostsQueryVariables>({
      query: GET_POSTS,
      variables,
      fetchPolicy: 'network-only',
    });
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
