import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFlashy]'
})
export class FlashyDirective {
  @Input("appFlashy") color: string | undefined;

  constructor(private ele: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.flash(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.flash('white');
  }

  private flash(color: string | undefined) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
