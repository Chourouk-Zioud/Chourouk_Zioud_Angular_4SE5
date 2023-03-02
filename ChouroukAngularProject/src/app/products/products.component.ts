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

  buy(product : Product){
    let i=this.listProduct.indexOf(product)
    this.listProduct[i].quantity--;
  }

  like(product:Product){
    let i=this.listProduct.indexOf(product)
    this.listProduct[i].like++;
  }

  
  }

  


