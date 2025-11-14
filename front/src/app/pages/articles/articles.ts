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

// This interface can later be moved into core/interfaces/post.ts
export interface Post {
  id: string;
  title: string;
  createdAt: string | null;
  authorId?: string | null;
  authorName?: string | null;
  content?: string | null;
  likes: number;
}

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FilterBar, PostCard],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Articles {
  private readonly router = inject(Router);

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

    // TODO: Replace this with a GraphQL refetch that requests posts ordered using "filter"
  }

  // Registers a "like" for a post both locally and in localStorage
  async handleUpvote(postId: string) {
    // TODO: Call GraphQL mutation likePost(postId)

    const liked = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    if (!liked.includes(postId)) {
      const updated = [...liked, postId];
      localStorage.setItem('postLikedId', JSON.stringify(updated));
    }

    // Optimistic update
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: (p.likes ?? 0) + 1 } : p
      )
    );
  }

  // Removes a like from localStorage and applies optimistic UI update
  async handleRemoveUpvote(postId: string) {
    // TODO: Call GraphQL mutation unlikePost(postId)

    const liked = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    const updatedLiked = liked.filter(id => id !== postId);
    localStorage.setItem('postLikedId', JSON.stringify(updatedLiked));

    // Optimistic update
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: Math.max((p.likes ?? 1) - 1, 0) } : p
      )
    );
  }

  // Navigates to post details page
  handleViewDetails(postId: string) {
    this.router.navigate(['/posts', postId]);
  }

  // TODO: Add an initialization that loads posts from GraphQL on component mount
}
