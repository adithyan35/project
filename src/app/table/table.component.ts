import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'AR-table',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  images = [
    { src: '/assets/med-1.jpeg', alt: 'med-1' },
    { src: '/assets/med-2.jpg', alt: 'med-2' },
    { src: '/assets/med-3.webp', alt: 'med-3' },
    { src: '/assets/med-4.jpg', alt: 'med-4' },
    { src: '/assets/med-5.jpg', alt: 'med-5' },
    { src: '/assets/med-6.jpg', alt: 'med-6' },
    { src: '/assets/med-7.webp', alt: 'med-7' },
    { src: '/assets/med-8.jpg', alt: 'med-8' }
  ];

  
}
