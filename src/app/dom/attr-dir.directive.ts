import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAttrDir]'
})
export class AttrDirDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline-block');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'all 0.5s 0s ease, all 0.5s 0s ease');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'red';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

}
