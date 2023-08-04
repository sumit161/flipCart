import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/interface';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  ProductsArray: Array<Iproducts> = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.GetAllProducts().subscribe(res=>{
      this.ProductsArray = res
    });
  }
}
