import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id!:number;
  product!:Product
  constructor(private route : ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product=this.productService.listProduct[this.id];
    
  }

}
