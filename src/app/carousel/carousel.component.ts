import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service'; 
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';
import AOS from 'aos';


@Component({
  selector: 'AR-carousel',
  standalone: true,
  imports: [NgbCarouselModule, FormsModule, CommonModule, PopupComponent, SearchComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  products: any[] = [];
  images: any[] = [];  // Store images from API
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(private productService: ProductService, private dialog: MatDialog) {}
  
  ngOnInit(): void {
    AOS.init
    this.loadProducts();
  }

  loadProducts(products: any[] = []) {
    if (products.length) {
      this.products = products;
      this.images = products.map((product) => product.image);
    } else {
      // Fetch products from the API on initialization if no filter/search applied
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
        this.images = products.map((product) => product.image); // Extract image URLs from API response
      });
    }
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  openDialog(productId: number): void {
    const selectedProduct = this.products.find((product) => product.id === productId);
    if (selectedProduct) {
      this.dialog.open(PopupComponent, {
        data: selectedProduct,
      });
    }
  }

  closeCarousel() {
    this.images = [];
  }
}
