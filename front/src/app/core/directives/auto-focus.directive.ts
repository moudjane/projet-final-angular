import { Directive, ElementRef, OnInit, input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements OnInit {
  readonly appAutoFocus = input<boolean>(true);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appAutoFocus()) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 100);
    }
  }
}
