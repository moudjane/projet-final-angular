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
import { ApiService } from '../../core/services/service-api';
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
  private readonly api = inject(ApiService);

  readonly form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  readonly error = signal('');
  readonly isSubmitting = signal(false);

  async handleSubmit() {
    if (this.form.invalid || this.isSubmitting()) return;

    this.error.set('');
    this.isSubmitting.set(true);

    const input = {
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
    };

    try {
      await firstValueFrom(this.api.createPost(input));
      this.router.navigateByUrl('/articles');
    } catch (err) {
      console.error(err);
      this.error.set('Error while creating the post.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
