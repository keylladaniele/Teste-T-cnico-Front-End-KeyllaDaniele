import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filteredConsoleProducts: Product[] = [];
  filteredGameProducts: Product[] = [];
  pagedConsoleProducts: Product[] = [];
  pagedGameProducts: Product[] = [];
  pageSize = 6;
  pageSizeOptions = [6, 12, 18];
  searchControl = new FormControl('');
  filteredOptions!: Observable<Product[]>;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filterProductsByType();
    this.updateConsolePage(0);
    this.updateGamePage(0);

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private filterProductsByType(): void {
    this.filteredConsoleProducts = this.products.filter(product => product.type === 'console');
    this.filteredGameProducts = this.products.filter(product => product.type === 'game');
  }

  updateConsolePage(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    this.pagedConsoleProducts = this.filteredConsoleProducts.slice(startIndex, startIndex + this.pageSize);
  }

  updateGamePage(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    this.pagedGameProducts = this.filteredGameProducts.slice(startIndex, startIndex + this.pageSize);
  }

  pageEventConsole(event: PageEvent): void {
    this.updateConsolePage(event.pageIndex);
  }

  pageEventGame(event: PageEvent): void {
    this.updateGamePage(event.pageIndex);
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(filterValue) ||
      product.description.toLowerCase().includes(filterValue) ||
      product.tags.some(tag => tag.toLowerCase().includes(filterValue))
    );
  }

  goToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  redirectToProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
