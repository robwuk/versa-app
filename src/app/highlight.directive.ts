import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.highlight(null, '#003E78');
    this.highlight('#003E78', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, '#003E78');
  }

  private highlight(bgcolor: string, fgcolor: string) {
    this.el.nativeElement.style.backgroundColor = bgcolor;
    this.el.nativeElement.style.color = fgcolor;
  }
}
