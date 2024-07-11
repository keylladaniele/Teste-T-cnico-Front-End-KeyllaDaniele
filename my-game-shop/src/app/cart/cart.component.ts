import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
  tags: string[];
  quantity?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  openCart() {
    this.cartService.openCart();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.calculateTotals();
  }

  checkout() {
    console.log('Implementar lógica de checkout');
  }

  clearCart() {
    this.cartService.clearCart();
    this.calculateTotals();
  }

  private calculateTotals() {
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  updateCart() {
    this.calculateTotals();
  }
}
