import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  order: Order = {} as Order;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.order = this.cartService.getOrder();
  }
}
