import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  onCartItemQteChange(item: CartItem, event: any): void {
    this.cartService.addItemToCart({
      ...item,
      qte: parseInt(event.target.value),
    });
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }
  calculateTotal(): void {
    this.total = this.cart.reduce(
      (total, item: CartItem) => (total += item.qte * item.price),
      0
    );
  }
  onSubmit(event: any) {
    this.cartService.setOrder({ ...event, total: this.total });
    this.cartService.clearCart();
    console.log(this.cartService.getOrder());
    //navigate to success order page
    this.router.navigate(['success']);
  }
}
