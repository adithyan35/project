import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@Component({
  selector: 'AR-filter',
  standalone: true,
  imports: [CdkAccordionModule,CommonModule,FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filters = [
    {code: "asc-01", value: "fantasy"},
    {code: "asc-02", value: "horror"},
    {code: "asc-03", value: "action"},
    {code: "asc-04", value: "romance"},
    {code: "asc-05", value: "comedy"},
    {code: "asc-06", value: "thriller"},
    {code: "asc-07", value: "drama"},
    {code: "asc-08", value: "documentary"},
    {code: "asc-09", value: "sci-fi"},
    {code: "asc-10", value: "adventure"},
    {code: "asc-11", value: "danger"},
    {code: "asc-12", value: "dfiction"},
    {code: "asc-13", value: "demonty"},
    {code: "asc-14", value: "dddd"},
    {code: "asc-15", value: "dynamite"},
    {code: "asc-16", value: "fussion"},
    {code: "asc-17", value: "da-da"},
    {code: "asc-18", value: "dentary"},
    {code: "asc-19", value: "sci-fi"},
    {code: "asc-20", value: "adventure"}
  ];
  
  dFilter = this.filters.slice(0, 5); 
  searchTerm: string = '';      
  isExpanded: boolean = false;  
  maxVisibleFilters: number = 5; 
  
  onSearch() {
  const resu = this.resulreturner();
     this.dFilter = this.isExpanded ? resu : resu.slice(0, this.maxVisibleFilters);
    
  }

  toggleViewMore() {
    this.isExpanded = !this.isExpanded;
    this.dFilter = this.isExpanded ? this.resulreturner() : this.resulreturner().slice(0, this.maxVisibleFilters);
        
  }
resulreturner(){
  return  this.filters.filter(filter => 
    (filter.value.toLowerCase().includes(this.searchTerm.toLowerCase()) || filter.code.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
}
  
  updatedFilter() {
    this.isExpanded =false;
    this.dFilter = this.filters.slice(0, this.maxVisibleFilters); 
  }
}
