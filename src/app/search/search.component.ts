import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon'; // For Material Icons
import { CommonModule } from '@angular/common';
import { debounceTime, Subject } from 'rxjs';
import AOS from 'aos';

@Component({
  selector: 'AR-search',
  standalone: true,
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  selectedCategory: string = 'All'; // Default to "All"
  searchSubject: Subject<string> = new Subject<string>();

  categories = ['All', 'Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing'];

  @Output() searchEvent = new EventEmitter<{ searchTerm: string; selectedCategory: string }>();

  constructor() {
    // Debounce search input
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.emitSearch();
    });
  }

  ngOnInit(){
    AOS.init;
  }

  onSearch(): void {
    this.searchSubject.next(this.searchTerm);
  }

  emitSearch(): void {
    // Emit both searchTerm and selectedCategory to the parent
    this.searchEvent.emit({ searchTerm: this.searchTerm, selectedCategory: this.selectedCategory });
  }
}
