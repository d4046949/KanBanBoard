import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Output()
  public isHovering = new EventEmitter<boolean>();

  constructor(public elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering.emit(false);
  }
}
