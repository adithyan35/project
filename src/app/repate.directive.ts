import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ARRepate]',
  standalone: true
})
export class RepateDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }


  @Input() set ARRepate(times: number){
    this.viewContainer.clear();
    for (let i=0; i < times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        index:i
      });
    }
    }
}
