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

  private flash(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
