import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type FilterType = 'CREATED_AT' | 'LIKES';

@Component({
  selector: 'app-filter-bar',
  imports: [CommonModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBar {
  readonly activeFilter = input<FilterType>('CREATED_AT');

  readonly change = output<FilterType>();

  setFilter(value: FilterType) {
    if (this.activeFilter() === value) return;
    this.change.emit(value);
  }
}
