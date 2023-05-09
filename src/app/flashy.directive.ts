import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFlashy]'
})
export class FlashyDirective {

  constructor(private ele: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.flash('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.flash('white');
  }

  private flash(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
