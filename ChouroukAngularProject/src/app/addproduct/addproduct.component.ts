import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product!: Product;
  constructor(private productService:ProductService,private route :Router) { }

  ngOnInit(): void {
    this.product = new Product;
  }

  submit(){
   this.productService.addProduct(this.product);
   this.route.navigateByUrl('/products')
   
  }


}
