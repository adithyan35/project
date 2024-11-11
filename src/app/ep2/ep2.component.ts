import { Component } from '@angular/core';
import { ExampService } from '../examp.service';

@Component({
  selector: 'AR-ep2',
  standalone: true,
  imports: [],
  templateUrl: './ep2.component.html',
  styleUrl: './ep2.component.css',
  providers:[ExampService]
})
export class Ep2Component {
  constructor( private example2 : ExampService,){

  }
}
