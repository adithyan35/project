import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface DemoUrl{
  url:string;
  video:boolean;

}

export interface DemoContext{
  $implicit : number;
  demo: string;
  url:DemoUrl;
}

@Directive({
  selector: '[aRDemo]',
  standalone: true
})
export class DemoDirective {

  @Input() aRDemo !: string;
  @Input() aRDemoUrl !:DemoUrl;
  
  constructor( private  templateref:TemplateRef<DemoContext>,
    private viewcontainer:ViewContainerRef
  ) { }

  ngOnInit(){
    const context = {
      $implicit:1,
      demo : this.aRDemo,
      url: this.aRDemoUrl,
    };
    this.viewcontainer.createEmbeddedView(this.templateref, context);
  }

  static ngTemplateContextGuard(directive: DemoDirective, context: unknown): context is DemoContext {
    return true; 
  }
}
