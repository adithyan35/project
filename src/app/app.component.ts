import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MyspinnerComponent } from './myspinner/myspinner.component';
import { Ep1Component } from './ep1/ep1.component';
import { Ep2Component } from './ep2/ep2.component';
// import { HttpClientModule } from '@angular/common/http';

import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DirevitesComponent } from './direvites/direvites.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, MyspinnerComponent, Ep1Component, Ep2Component,FilterComponent,TableComponent,SidenavComponent,PaginationComponent,DirevitesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
