import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Post } from '../../core/interfaces/post';
import { TimeAgoPipe } from '../../core/pipes/time-ago.pipe';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  private readonly router = new Router();

  readonly post = input.required<Post>();

  readonly upvote = output<string>();
  readonly removeUpvote = output<string>();
  readonly viewDetails = output<string>();

  readonly formattedDate = computed(() => {
    const createdAt = this.post()?.createdAt ?? '';
    return new Date(createdAt).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  });

  readonly isPostLiked = computed(() => {
    const raw = localStorage.getItem('postLikedId') || '[]';
    const liked = JSON.parse(raw) as string[];
    const postId = this.post()?.id;
    return postId ? liked.includes(postId) : false;
  });

  handleTitleClick() {
    const id = this.post()?.id;
    if (id) {
      this.router.navigate(['/post', id]);
    }
  }

  onUpvote() {
    const id = this.post()?.id;
    if (id) this.upvote.emit(id);
  }

  onRemoveUpvote() {
    const id = this.post()?.id;
    if (id) this.removeUpvote.emit(id);
  }

  onViewDetails() {
    const id = this.post()?.id;
    if (id) {
      this.router.navigate(['/post', id]);
    }
  }
}
