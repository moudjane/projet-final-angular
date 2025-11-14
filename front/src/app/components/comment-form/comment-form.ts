import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comment-form.html',
  styleUrl: './comment-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentForm {
  private readonly fb = new FormBuilder();

  // Emits l'événement "submit" → équivalent du defineEmits
  readonly submitComment = output<string>();

  // comment = ref('')
  readonly comment = signal('');

  readonly form = this.fb.nonNullable.group({
    comment: ['', [Validators.required]],
  });

  handleSubmit() {
    const text = this.form.controls.comment.value.trim();
    if (!text) return;

    this.submitComment.emit(text);
    this.form.controls.comment.setValue('');
    this.comment.set('');
  }

  isEmpty() {
    return !this.form.controls.comment.value.trim();
  }
}
