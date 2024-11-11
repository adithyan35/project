import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HighlightDirective } from '../highlight.directive';
import { HasHighlightDirective } from '../has-highlight.directive';
import { ListdynamicDirective } from '../listdynamic.directive';
import { ShowifDirective } from '../showif.directive';
import { RepateDirective } from '../repate.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'AR-pagination',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,HighlightDirective,HasHighlightDirective,ListdynamicDirective,ShowifDirective,RepateDirective,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  collection: string[] = []; 
  p: number = 1;
  item = '';
  isVisible = true;

  constructor() {
    for (let i = 1; i <= 500; i++) {
      this.collection.push(`item ${i}`);

      console.log(this.isVisible);
      
    }
  }

  data = [{name : 'adithyan'}, { name: 'rithvik'}];

 count =3;
}
