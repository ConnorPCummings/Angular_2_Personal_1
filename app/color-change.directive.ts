import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[colorChange]',
    host: {
        '(click)': 'onClick()'
    }
})

export class ColorChangeDirective{

  constructor(private el:ElementRef, private renderer: Renderer){

  }
  onClick(){
    this.renderer.setElementStyle(this.el.nativeElement, "color", 'purple');
  }
}
