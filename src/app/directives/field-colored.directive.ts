import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFieldColored]',
})
export class FieldColoredDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @HostListener('focus') onFocus(): void {
    this.backgroundColor = 'lightgray';
  }

  @HostListener('blur') onBlur(): void {
    this.backgroundColor = 'transparent';
  }
}
