import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import {Product} from "../../models/product";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl:string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProducts():Observable<Product[]> {
    return this.http.get(this.baseUrl+"/products")
      .map((products:Product[]) => {
        return products.map(product => {
          return new Product(product)
        })
      }).catch(err => Observable.empty<Product[]>());
  }

}
