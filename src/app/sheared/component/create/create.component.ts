import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Iproducts } from '../../model/interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  ProductId!: number;
  ProductsData!: FormGroup;
  ProdCategoryArray!: any[];
  Obj!: Iproducts;
  constructor(
    private _routes: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._productsService.getCategory().subscribe((res) => {
      this.ProdCategoryArray = [...new Set(res.map((ele) => ele.category))];
      console.log(this.ProdCategoryArray);
    });

    this.ProductsData = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      rating: new FormGroup({
        rate: new FormControl(null, [Validators.required]),
        count: new FormControl(null, [Validators.required]),
      }),
    });

    this._routes.params.subscribe((params: Params) => {
      this.ProductId = +params['id'];
    });
    this._productsService.GetSingleProd(this.ProductId).subscribe((ele) => {
      ele;
      // this.Obj = ele;
      // console.log(this.Obj);
      this.ProductsData.patchValue(ele);
    });
  }

  OnSubmit() {
    let Obj = {
      ...this.ProductsData.value,
    };
    console.log(Obj);
    this._productsService.getaAddProduct(Obj).subscribe((res) => {
      res;
      this._router.navigate(['/Products']);
    });
  }
  OnUpdate() {
    let Obj = {
      id: this.ProductId,
      ...this.ProductsData.value,
    };
    this._productsService.getPatchObject(Obj).subscribe(res=>{
      res;
      this._router.navigate(['/Products'])
    })
  }
}
