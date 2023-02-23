import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct! : Product[];
  constructor( private productservice:ProductService) { }

  ngOnInit(): void {
  this.listProduct=this.productservice.listProduct;
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(p:number){
    this.listProduct[p].like++;
  }

}
