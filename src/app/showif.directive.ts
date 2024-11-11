import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ARShowif]',
  standalone: true
})
export class ShowifDirective {
@Input () ARShowif!: boolean;
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer:ViewContainerRef){ }

  ngOnChanges(){
    if(this.ARShowif) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainer.clear();
    }
  }

  @Input() set ARShowing(times: number){
  for (let i=0; i < times; i++){
    this.viewContainer.createEmbeddedView(this.templateRef,{
      index:1
    });
  }
  }
}
