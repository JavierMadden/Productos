import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/Producto'
import { ProductoDetalle } from '../modelos/ProductoDetalle';
@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  producto: Producto;
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:3000';

  getProducts(){
    return this.http.get<Producto[]>(this.Url + `/Products`);
  }
  addProducts(product:Producto){
    return this.http.post<Producto>(this.Url + `/Products`, product);
  }
  addDetailProducts(product:ProductoDetalle){
    return this.http.post<ProductoDetalle>(this.Url + `/ProductsDetails`, product);
  }
  getProductsById(id:number){
    return this.http.get<Producto>(this.Url + `/Products` + "/" + id);
  }
  getProductDetailById(id:number){
    return this.http.get<ProductoDetalle>(this.Url + `/ProductsDetails` + "/" + id);
  }
}
