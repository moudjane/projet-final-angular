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
import { Apollo } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../core/services/service-api';

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
  private readonly apollo = inject(Apollo);
  private readonly api = inject(ApiService);

  readonly postId = signal<string | null>(null);
  readonly post = signal<PostWithComments | null>(null);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postId.set(id);
    this.loadPost();
  }

  private async loadPost() {
    const id = this.postId();
    if (!id) return;

    try {
      const { data }: any = await firstValueFrom(this.api.getPost(id));
      const p = data?.getPost;
      if (!p?.id) return;

      this.post.set({
        id: p.id,
        title: p.title ?? '',
        content: p.content,
        createdAt: p.createdAt,
        authorId: p.authorId,
        authorName: p.authorName,
        likes: p.likes ?? 0,
        comments: (p.comments ?? []).map((c: any) => ({
          id: c.id ?? undefined,
          content: c.content,
        })),
      });
    } catch (err) {
      console.error('Failed to load post', err);
    }
  }

  async handleUpvote(postId: string) {
    const current = this.post();
    if (!current) return;

    const prev = current;
    const liked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
    if (!liked.includes(postId)) {
      localStorage.setItem('postLikedId', JSON.stringify([...liked, postId]));
    }

    this.post.set({ ...current, likes: (current.likes ?? 0) + 1 });

    try {
      await firstValueFrom(this.api.likePost(postId));
    } catch (err) {
      console.error('LikePost mutation failed', err);
      // rollback
      const curLiked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
      localStorage.setItem(
        'postLikedId',
        JSON.stringify(curLiked.filter(id => id !== postId))
      );
      this.post.set(prev);
    }
  }

  async handleRemoveUpvote(postId: string) {
    const current = this.post();
    if (!current) return;

    const prev = current;
    const liked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
    localStorage.setItem('postLikedId', JSON.stringify(liked.filter(id => id !== postId)));

    this.post.set({
      ...current,
      likes: Math.max((current.likes ?? 1) - 1, 0),
    });

    try {
      await firstValueFrom(this.api.unlikePost(postId));
    } catch (err) {
      console.error('UnlikePost mutation failed', err);
      // rollback
      const curLiked = JSON.parse(localStorage.getItem('postLikedId') || '[]') as string[];
      localStorage.setItem('postLikedId', JSON.stringify([...curLiked, postId]));
      this.post.set(prev);
    }
  }

  async handleAddComment(content: string) {
    const current = this.post();
    if (!current?.id || !content.trim()) return;

    const prev = current;
    const tempId = `temp-${Date.now()}`;
    this.post.set({
      ...current,
      comments: [...(current.comments ?? []), { id: tempId, content }],
    });

    try {
      const { data }: any = await firstValueFrom(this.api.addComment(current.id, content));
      const saved = data?.addComment;
      if (saved?.id) {
        this.post.set({
          ...this.post()!,
          comments: (this.post()!.comments ?? []).map(c =>
            c.id === tempId ? { id: saved.id, content: saved.content } : c
          ),
        });
      }
    } catch (err) {
      console.error('AddComment mutation failed', err);
      // rollback
      this.post.set(prev);
    }
  }
}
