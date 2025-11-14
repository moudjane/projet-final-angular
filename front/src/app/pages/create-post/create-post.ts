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

@Component({
  selector: 'app-create-post',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-post.html',
})
export class CreatePost {
  private readonly fb = inject(FormBuilder);
  readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  readonly error = signal('');
  readonly isSubmitting = signal(false);

  // TODO: Connect GraphQL mutation here later
  // createPostMutation.mutate(...)

  async handleSubmit() {
    if (this.form.invalid || this.isSubmitting()) return;

    this.error.set('');
    this.isSubmitting.set(true);

    // TODO: Replace with GraphQL mutation when ready
    console.log('TODO: Send GraphQL create post mutation');

    try {
      // Simulate success for now
      await new Promise((res) => setTimeout(res, 600));

      this.router.navigateByUrl('/articles');
    } catch (err) {
      console.error(err);
      this.error.set('Error while creating the post.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
