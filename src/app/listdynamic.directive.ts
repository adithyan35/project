import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aRListdynamic]',
  standalone: true
})
export class ListdynamicDirective {
@Input () aRListdynamic !: any[];

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }

ngOnInit(){
  this.viewContainer.clear();
  for (const data of this.aRListdynamic){
    const context={ $data:data} ;
    this.viewContainer.createEmbeddedView(this.templateRef, context);

  }
}
}
