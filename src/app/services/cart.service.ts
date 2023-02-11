import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private order: Order = {} as Order;
  constructor() {}
  setOrder(orderDetails: any) {
    this.order = { ...orderDetails };
  }
  getOrder() {
    return this.order;
  }
  getCart() {
    return this.cart;
  }
  addItemToCart(cartItem: CartItem) {
    if (cartItem.qte === 0) {
      alert('item rmoved from cart!');
      this.cart = [...this.cart.filter((item) => item.id !== cartItem.id)];
    } else {
      //if new item added to top of cart
      if (!this.cart.find((item) => item.id == cartItem.id)) {
        alert('added to cart!');
        this.cart = [
          ...this.cart.filter((item) => item.id !== cartItem.id),
          cartItem,
        ];
      } else {
        const itemIndex = this.cart
          .map((i) => {
            return i.id;
          })
          .indexOf(cartItem.id);
        this.cart.splice(itemIndex, 1, cartItem);
      }
    }

    return this.cart;
  }
  clearCart() {
    this.cart = [];
  }
}
