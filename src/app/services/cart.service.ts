import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  constructor() {}

  getCart() {
    return this.cart;
  }
  addItemToCart(cartItem: CartItem) {
    this.cart = [
      ...this.cart.filter((item) => item.id !== cartItem.id),
      cartItem,
    ];
    return this.cart;
  }
}
