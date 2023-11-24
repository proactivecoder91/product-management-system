import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  addProduct(obj:any){
  return this.http.post("http://localhost:3000/products",obj);
  }

  getProductList(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/products");
  }

  getProductDetail(id:number){
    return this.http.get<any[]>("http://localhost:3000/products/"+id)
  }
}
