import { Component } from '@angular/core';
import { Animal, IsDogDirective } from '../is-dog.directive';
import { CommonModule } from '@angular/common';
import { DemoDirective, DemoUrl } from '../demo.directive';
import { ColorDirective } from '../color.directive';
import { BackgroundcolorDirective } from '../backgroundcolor.directive';

@Component({
  selector: 'AR-direvites',
  standalone: true,
  imports: [IsDogDirective,CommonModule,DemoDirective],
  templateUrl: './direvites.component.html',
  styleUrl: './direvites.component.css',
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'], 
      outputs: ['colorchanged'], 
    }, 
    BackgroundcolorDirective
  ]

})
export class DirevitesComponent {

  animal : Animal = {
    name:'oreo',
    breed: 'labour dog',
    type: 'Dog',
  };



   demoString = 'Demo string';

  demoUrl:DemoUrl = {
    url:'http://www.wilwaretech.com',
    video: true,
  }
  dosomething() {
    console.log('event fired');
  };
}
