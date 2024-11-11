import { Directive, ElementRef, EventEmitter, inject, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aRColor]',
  standalone: true
})
export class ColorDirective {
 renderer = inject(Renderer2) ;
 hostEl = inject(ElementRef).nativeElement;

 @Input() color= 'blue';
 @Output() colorchanged = new EventEmitter();

  constructor() { }

  ngOnInit(){
    this.renderer.setStyle(this.hostEl, 'color', this.color);
    this.renderer.setStyle(this.hostEl, 'border', '2px solid black');
    this.renderer.setStyle(this.hostEl, 'border-radius', '5px');
    this.renderer.setStyle(this.hostEl, 'padding', '8px');

    setInterval(()=>{
      this.colorchanged.emit();
    },1000);
  }

}
