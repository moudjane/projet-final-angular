import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post } from '../../core/interfaces/post';
import { CommentCard } from '../comment-card/comment-card';
import { CommentForm } from '../comment-form/comment-form';

type PostWithComments = Post & {
  comments?: { content: string | null }[] | null;
};

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, CommentCard, CommentForm],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetail {
  readonly post = input.required<PostWithComments>();

  readonly upvote = output<string>();
  readonly removeUpvote = output<string>();
  readonly addComment = output<string>();

  readonly formattedDate = computed(() => {
    const createdAt = this.post()?.createdAt ?? '';
    return new Date(createdAt).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  });

  readonly isPostLiked = computed(() => {
    const postId = this.post()?.id;
    if (!postId) {
      return false;
    }

    const likedPost = JSON.parse(
      localStorage.getItem('postLikedId') || '[]'
    ) as string[];

    return likedPost.includes(postId);
  });

  onUpvote() {
    const id = this.post()?.id;
    if (id) {
      this.upvote.emit(id);
    } else {
      console.error('No post ID given');
    }
  }

  onRemoveUpvote() {
    const id = this.post()?.id;
    if (id) {
      this.removeUpvote.emit(id);
    } else {
      console.error('No post ID given');
    }
  }

  onAddComment(content: string) {
    this.addComment.emit(content);
  }
}
