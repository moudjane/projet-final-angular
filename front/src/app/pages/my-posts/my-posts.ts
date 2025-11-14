import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-api';
import { Post } from '../../core/interfaces/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-posts',
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-posts.html',
})
export class MyPosts {
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  //
  // TODO: Replace all mock data with real GraphQL queries later
  //

  readonly posts = signal<Post[]>([]);
  readonly isEditing = signal<string | null>(null);
  readonly editForm = signal({ title: '', content: '' });

  readonly user = computed(() => this.auth.user());

  constructor() {
    this.loadUserPosts();
  }

  //
  // TODO: Replace with real GraphQL GET_USER_POSTS
  //
  loadUserPosts() {
    console.log('TODO: Fetch posts from GraphQL using author:', this.user()?.username);

    // Simulated data for now
    this.posts.set([
      {
        id: '1',
        title: 'Mon premier article',
        content: 'Contenu...',
        createdAt: new Date().toISOString(),
        authorId: this.user()?.id ?? '',
        likes: 5,
      },
    ]);
  }

  startEdit(post: Post) {
    this.isEditing.set(post.id);
    this.editForm.set({
      title: post.title,
      content: post.content ?? '',
    });
  }

  cancelEdit() {
    this.isEditing.set(null);
    this.editForm.set({ title: '', content: '' });
  }

  //
  // TODO: Replace with GraphQL UpdatePost mutation
  //
  async handleUpdate(postId: string) {
    const form = this.editForm();

    if (!form.title.trim() || !form.content.trim()) return;

    console.log('TODO: UpdatePost mutation →', { postId, input: form });

    // Simulate update
    const updated = this.posts().map(p =>
      p.id === postId ? { ...p, title: form.title, content: form.content } : p
    );

    this.posts.set(updated);
    this.isEditing.set(null);
  }

  //
  // TODO: Replace with GraphQL DeletePost mutation
  //
  async handleDelete(postId: string) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    console.log('TODO: DeletePost mutation →', postId);

    this.posts.set(this.posts().filter(p => p.id !== postId));
  }

  goToCreate() {
    this.router.navigateByUrl('/articles/new');
  }
}
