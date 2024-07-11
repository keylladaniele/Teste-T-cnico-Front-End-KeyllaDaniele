import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
  tags: string[];
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public cartService: CartService,
    private productService: ProductService,
  ) {}

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
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image,
        type: this.product.type,
        tags: this.product.tags,
        quantity: 1
      });
      console.log('Produto adicionado ao carrinho:', this.product.name);
    } else {
      console.error('Product is not defined');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
