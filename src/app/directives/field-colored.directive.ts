import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFieldColored]',
})
export class FieldColoredDirective {
  @Input() color = 'lightgray';

  @HostBinding('style.backgroundColor') backgroundColor = '';

  @HostListener('focus') onFocus(): void {
    this.backgroundColor = this.color;
  }

  @HostListener('blur') onBlur(): void {
    this.backgroundColor = 'transparent';
  }
}
