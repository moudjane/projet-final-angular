import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  imports: [],
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.scss'
})
export class CommentCard {
  readonly comment = input<string>('');

}
