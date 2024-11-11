import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ARHighlight]',
  standalone: true
})
export class HighlightDirective {
@Input() ARHighlight ='';
@Input() defaultColor = '';

  constructor( private el:ElementRef) { 
   
  }

  ngOnInit(){
    this.Highlight (this.defaultColor || '')
  }
  @HostListener('mouseleave') onMouseLeave(){
this.Highlight(this.defaultColor);
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.Highlight(this.ARHighlight);
    this.Highlight('20px')
      }

      private Highlight(color:string){
        this.el.nativeElement.style.backgroundColor=color;
      }
}
