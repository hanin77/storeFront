import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  qte: number = 1;
  ngOnInit(): void {}
  changeQte(event: any): void {
    this.qte = event?.target?.value;
  }
  onSubmit(product: Product, event: Event): void {
    console.log(product, this.qte);
  }
}
