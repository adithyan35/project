import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyspinnerComponent } from '../myspinner/myspinner.component';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SearchComponent } from '../search/search.component';
import { HighlightCardDirective } from '../highlight-card.directive';
import AOS from 'aos';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { filter, map, Observable, of, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
    MyspinnerComponent,
    PopupComponent,
    SearchComponent,
    HighlightCardDirective,
    CarouselComponent,
    NgbPaginationModule,
    OverlayModule,
    MatCheckboxModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  paginatedProducts: any[] = [];
  pageSize = 5;
  pageIndex = 0;
  searchTerm: string = '';
  page = 5;
getData$!:Observable<any>;
  private productService = inject(ProductService);
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    AOS.init();
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.updatePagination();
    });
// this.productService.userLoggedIn.subscribe((loggedIn:boolean)=>{
//   if(loggedIn){
   this.getData$ =  this.productService.getData().pipe(
    tap((item)=>{
      console.log(item);
    }),
    map((item:any)=>  {
      return item.map(
      (individual:any)=>{
        console.log(individual);
        individual.id+=100;
        return individual;
      })
    }),
    tap((item)=>{
      console.log(item);
    })
   )
//   }
// })
    
  }

  openDialog(productId: number): void {
    const selectedProduct = this.products.find((product) => product.id === productId);
    if (selectedProduct) {
      this.dialog.open(PopupComponent, {
        data: selectedProduct,
      });
    }
  }

  openImage(imageUrl: string): void {
    const selectedProduct = this.products.find((product) => product.image === imageUrl);
    if (selectedProduct) {
      this.dialog.open(PopupComponent, {
        data: { image: selectedProduct.image },
      });
    }
  }

  onPageChange(page: number): void {
    this.pageIndex = page - 1;
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  filterProducts(searchTerm: string, selectedCategory: string): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (this.filteredProducts.length === 0) {
      console.log('No data found');
      this.carousel.closeCarousel();
    } else {
      this.carousel.loadProducts(this.filteredProducts);
    }
    this.pageIndex = 0;
    this.updatePagination();
  }

  // closeDialog(): void {
  //   this.close();
  // }
  

  changeState(data:any){
this.productService.assignUserData(data);
  }
}
