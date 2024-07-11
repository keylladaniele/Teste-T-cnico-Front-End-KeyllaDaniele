import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();

  constructor() {}

  getItems(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(this.cartItems);
    });
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity !== undefined) {
        existingProduct.quantity++;
      }
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.isCartOpenSubject.next(true);
  }

  clearCart() {
    this.cartItems = [];
    this.isCartOpenSubject.next(false);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    if (this.cartItems.length === 0) {
      this.isCartOpenSubject.next(false);
    }
  }

  closeCart() {
    this.isCartOpenSubject.next(false);
  }

  isCartOpen() {
    return this.isCartOpenSubject.value;
  }

  openCart() {
    this.isCartOpenSubject.next(true);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity || 0) * item.price, 0);
  }
}
