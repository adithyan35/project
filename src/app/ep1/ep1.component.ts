import { Component } from '@angular/core';
import { ExampService } from '../examp.service';
import { Ep2Component } from '../ep2/ep2.component';

@Component({
  selector: 'AR-ep1',
  standalone: true,
  imports: [Ep2Component],
  templateUrl: './ep1.component.html',
  styleUrl: './ep1.component.css',
  providers:[ExampService]
})
export class Ep1Component {
constructor( private example1 : ExampService,){

}
}
