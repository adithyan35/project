import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ARHasHighlight]',
  standalone: true
})
export class HasHighlightDirective {
@Input() ARHasHighlight!:string;

  constructor(private templateRef: TemplateRef<any>,
     private viewContainer:ViewContainerRef) {

      }
ngOnInit(){
  const haspermision =this.ARHasHighlight === 'admin';
  if (haspermision){
    this.viewContainer.createEmbeddedView(this.templateRef);
  }else {
    this.viewContainer.clear();
  }
}
}
