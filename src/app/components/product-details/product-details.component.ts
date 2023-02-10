import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number | undefined;
  product: Product | undefined = undefined;
  qte: number = 1;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService.getProducts().subscribe((res) => {
      if (this.id) {
        this.product = res.find((pr) => pr.id === this.id);
      }
    });
  }
  changeQte(event: any): void {
    this.qte = event?.target?.value;
  }
  onSubmit(product: Product | undefined): void {
    this.cartService.addItemToCart({ ...(product as Product), qte: this.qte });
  }
}
