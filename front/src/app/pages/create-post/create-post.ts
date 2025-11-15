import {
  Component,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gql, Apollo } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { GetPostsDocument } from '../../../../graphql/generated';

@Component({
  selector: 'app-create-post',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-post.html',
})
export class CreatePost {
  private readonly fb = inject(FormBuilder);
  readonly router = inject(Router);
  private readonly apollo = inject(Apollo);

  readonly form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  readonly error = signal('');
  readonly isSubmitting = signal(false);

  // TODO: Connect GraphQL mutation here later
  // createPostMutation.mutate(...)

  private static CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
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

  async handleSubmit() {
    if (this.form.invalid || this.isSubmitting()) return;

    this.error.set('');
    this.isSubmitting.set(true);
    const input = {
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
    } as any;

    try {
      await firstValueFrom(
        this.apollo.mutate({
          mutation: CreatePost.CREATE_POST,
          variables: { input },
          refetchQueries: [{ query: GetPostsDocument }],
        })
      );

      this.router.navigateByUrl('/articles');
    } catch (err) {
      console.error(err);
      this.error.set('Error while creating the post.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
