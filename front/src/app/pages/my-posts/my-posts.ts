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
import { gql, Apollo } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import {
  GetPostsDocument,
  GetPostsQueryVariables,
} from '../../../../graphql/generated';

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      content
      createdAt
      authorId
      authorName
      likes
      category
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

@Component({
  selector: 'app-my-posts',
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-posts.html',
})
export class MyPosts {
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  private readonly apollo = inject(Apollo);

  readonly posts = signal<Post[]>([]);
  readonly isEditing = signal<string | null>(null);
  readonly editForm = signal({ title: '', content: '' });

  readonly user = computed(() => this.auth.user());

  constructor() {
    this.loadUserPosts();
  }

  loadUserPosts() {
    const username = this.user()?.username;
    if (!username) return;

    const variables: GetPostsQueryVariables = {
      filter: {
        author: username,
        orderBy: { field: 'CREATED_AT', direction: 'DESC' },
      },
      pagination: { skip: 0, take: 50 },
      category: null,
    };

    firstValueFrom(
      this.apollo.query({
        query: GetPostsDocument,
        variables,
        fetchPolicy: 'network-only',
      })
    )
      .then(({ data }: any) => {
        const items = (data?.getPosts ?? [])
          .filter((p: any): p is { id: string } => p?.id != null)
          .map(
            (p: any) =>
              ({
                id: p.id,
                title: p.title ?? '',
                createdAt: p.createdAt,
                authorId: p.authorId,
                authorName: p.authorName,
                content: p.content,
                likes: p.likes ?? 0,
              } as Post)
          );
        this.posts.set(items);
      })
      .catch((err) => {
        console.error('Failed to load my posts', err);
      });
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

  async handleUpdate(postId: string) {
    const form = this.editForm();
    if (!form.title.trim() || !form.content.trim()) return;

    try {
      const { data }: any = await firstValueFrom(
        this.apollo.mutate({
          mutation: UPDATE_POST,
          variables: {
            id: postId,
            input: {
              title: form.title,
              content: form.content,
            },
          },
        })
      );

      const updatedPost = data?.updatePost;
      if (updatedPost?.id) {
        this.posts.update((list) =>
          list.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  title: updatedPost.title ?? p.title,
                  content: updatedPost.content ?? p.content,
                }
              : p
          )
        );
      }
      this.isEditing.set(null);
    } catch (err) {
      console.error('UpdatePost mutation failed', err);
    }
  }

  async handleDelete(postId: string) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { data }: any = await firstValueFrom(
        this.apollo.mutate({
          mutation: DELETE_POST,
          variables: { id: postId },
        })
      );

      if (data?.deletePost === true) {
        this.posts.set(this.posts().filter((p) => p.id !== postId));
      }
    } catch (err) {
      console.error('DeletePost mutation failed', err);
    }
  }

  goToCreate() {
    this.router.navigateByUrl('/articles/new');
  }
}
