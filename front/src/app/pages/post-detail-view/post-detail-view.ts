import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PostDetail } from '../../components/post-detail/post-detail';
import { Post } from '../../core/interfaces/post';

type PostWithComments = Post & {
  comments?: { content: string | null; id?: string }[] | null;
};

@Component({
  selector: 'app-post-detail-view',
  imports: [CommonModule, PostDetail],
  templateUrl: './post-detail-view.html',
  styleUrl: './post-detail-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailView {
  private readonly route = inject(ActivatedRoute);

  readonly postId = signal<string | null>(null);
  readonly post = signal<PostWithComments | null>(null);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postId.set(id);

    // TODO: Replace this mock call with a real GraphQL query (GET_POST)
    this.loadPost();
  }

  //
  // TODO: Replace with real GraphQL GET_POST call using this.postId()
  //
  private loadPost() {
    const id = this.postId();
    if (!id) {
      console.error('No post ID in route');
      return;
    }

    // Temporary mocked post – to be removed when GraphQL is wired
    this.post.set({
      id,
      title: 'Sample post title',
      content: 'Sample content for this post. Replace with real data.',
      createdAt: new Date().toISOString(),
      authorId: 'author-1',
      authorName: 'John Doe',
      likes: 10,
      comments: [
        { id: 'c1', content: 'First sample comment' },
        { id: 'c2', content: 'Another comment here' },
      ],
    });
  }

  //
  // TODO: Replace with GraphQL LikePost mutation + refetch
  //
  async handleUpvote(postId: string) {
    console.log('TODO: LikePost mutation for postId =', postId);

    const current = this.post();
    if (!current) return;

    this.post.set({
      ...current,
      likes: (current.likes ?? 0) + 1,
    });

    const likedPost = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    if (!likedPost.includes(postId)) {
      localStorage.setItem(
        'postLikedId',
        JSON.stringify([...likedPost, postId])
      );
    }
  }

  //
  // TODO: Replace with GraphQL UnlikePost mutation + refetch
  //
  async handleRemoveUpvote(postId: string) {
    console.log('TODO: UnlikePost mutation for postId =', postId);

    const current = this.post();
    if (!current) return;

    this.post.set({
      ...current,
      likes: Math.max((current.likes ?? 1) - 1, 0),
    });

    const likedPost = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    const updated = likedPost.filter(id => id !== postId);
    localStorage.setItem('postLikedId', JSON.stringify(updated));
  }

  //
  // TODO: Replace with GraphQL AddComment mutation + refetch
  //
  async handleAddComment(content: string) {
    const current = this.post();
    if (!current || !current.id) return;

    console.log('TODO: AddComment mutation for postId =', current.id, 'content =', content);

    const newComment = { id: `temp-${Date.now()}`, content };

    this.post.set({
      ...current,
      comments: [...(current.comments ?? []), newComment],
    });
  }
}
