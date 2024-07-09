import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  displayedProducts: Product[] = [];
  pageSize = 9;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.updateDisplayedProducts();
   }

  goToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  updateDisplayedProducts(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }

  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedProducts();
  }

}
