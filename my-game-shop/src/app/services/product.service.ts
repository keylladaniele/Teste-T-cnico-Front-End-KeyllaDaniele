import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 149.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 199.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 149.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 199.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 149.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 199.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 149.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 199.99,
      image: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
