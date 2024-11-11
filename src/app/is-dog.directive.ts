import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { State } from '@popperjs/core';

export const isDog = (animal:Animal) : animal is Dog =>{
  return (animal as Dog).breed !== undefined ;
}

export interface Cat {
  name: string;
  type: 'Cat';
}

export interface Dog{
  name: string;
  breed:string;
  type: 'Dog';
}

export type Animal = Dog | Cat;


@Directive({
  selector: '[aRIsDog]',
  standalone: true
})
export class IsDogDirective {


  constructor(private templateref :TemplateRef<any>,
    private viewcontainer:ViewContainerRef,
  ) { }

  @Input() set aRIsDog(animal : Animal){
    if (isDog(animal)){
      this.viewcontainer.createEmbeddedView(this.templateref);
    }else{
      this.viewcontainer.clear();
    }
  }

   static ngTemplateGaurd_aRIsDog(dir : IsDogDirective, State: Animal):State is Dog{
    return  true
;   }
}
