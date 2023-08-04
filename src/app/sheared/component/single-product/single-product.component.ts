import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from '../../model/interface';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  ProductId!: number;
  ProudctsObj!: Iproducts;
  constructor(
    private _routes: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._routes.params.subscribe((params: Params) => {
      this.ProductId = +params['id'];
    });
    this._productsService.GetSingleProd(this.ProductId).subscribe((res) => {
      this.ProudctsObj = res;
    });
  }
  Ondelete(id: number) {
    this._productsService.GetDelete(id).subscribe((res) => {
      res;
      this._router.navigate(['/Products']);
    });
  }
}
