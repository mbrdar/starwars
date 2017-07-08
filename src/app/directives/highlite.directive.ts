import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = '#f5f5f5';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }

}
