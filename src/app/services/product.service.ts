import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44314/api/products/getall"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl) ;//http ye apiurl adresine get isteği yapıldı.

  }
}
