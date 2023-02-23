import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct! : Product[];
  constructor() { }

  ngOnInit(): void {
    
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(p:number){
    this.listProduct[p].like++;
  }

}
