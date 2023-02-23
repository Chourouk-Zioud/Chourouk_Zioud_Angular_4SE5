import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  alertstock!:number;
  listProduct! : Product[];
  constructor( private productservice:ProductService,private calcul:CalculService) { }

  ngOnInit(): void {
  this.listProduct=this.productservice.listProduct;
  this.alertstock = this.calcul.getNumberOf(this.listProduct,'quantity',0);
  
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(p:number){
    this.listProduct[p].like++;
  }

  
  }

  


