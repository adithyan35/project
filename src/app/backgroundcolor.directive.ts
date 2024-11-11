import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aRBackgroundcolor]',
  standalone: true
})
export class BackgroundcolorDirective {
  renderer = inject(Renderer2) ;
  hostEl = inject(ElementRef).nativeElement;
 
   constructor() { }
 
   ngOnInit(){
     this.renderer.setStyle(this.hostEl, 'backgroundColor', 'pink')
   }

}
