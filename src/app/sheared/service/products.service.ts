import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproducts } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Productsurl: string = `${environment.BaseUrl}products`;
  categoryUrl: string = `${environment.Category}`;
  constructor(private _http: HttpClient) {}

  getCategory(): Observable<Iproducts[]> {
    return this._http.get<Iproducts[]>(this.categoryUrl);
  }

  GetAllProducts(): Observable<Iproducts[]> {
    return this._http.get<Iproducts[]>(this.Productsurl);
  }
  GetSingleProd(id: number): Observable<Iproducts> {
    let singleObj = `${this.Productsurl}/${id}`;
    return this._http.get<Iproducts>(singleObj);
  }
  GetDelete(id: number): Observable<Iproducts> {
    let DeleteObj = `${this.Productsurl}/${id}`;
    return this._http.delete<Iproducts>(DeleteObj);
  }
  getaAddProduct(Post: Iproducts): Observable<Iproducts> {
    return this._http.post<Iproducts>(this.Productsurl, Post);
  }
  getPatchObject(Post: Iproducts): Observable<Iproducts> {
    let PatchUrl = `${this.Productsurl}/${Post.id}`;
    return this._http.patch<Iproducts>(PatchUrl,Post)
  }
}
