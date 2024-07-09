import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

}
