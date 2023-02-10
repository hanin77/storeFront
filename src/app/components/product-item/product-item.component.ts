import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  qte: number = 1;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}
  changeQte(event: any): void {
    this.qte = event?.target?.value;
  }
  onSubmit(product: Product): void {
    this.cartService.addItemToCart({ ...product, qte: this.qte });
  }
}
