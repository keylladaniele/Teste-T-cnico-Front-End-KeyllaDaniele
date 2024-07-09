import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ProductService } from '../services/product.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  products: Product[] = [];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public cartService: CartService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam !== null) {
      const productId = +productIdParam;
      this.product = this.productService.getProductById(productId);
    } else {
      console.error('Product ID is not available');
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart({
        productId: this.product.id,
        productName: this.product.name,
        quantity: 1,
        price: this.product.price,
        image: this.product.image
      });
      this.sidenav.open();
    } else {
      console.error('Product is not defined');
    }
  }

  goBack(): void {
    this.location.back();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }

  checkout(): void {
    console.log('Checkout clicked');
  }
}
