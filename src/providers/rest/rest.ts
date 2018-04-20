import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

class Products {
}

interface Product {
}

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private callbackfn: ;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProducts():Observable<Products[]> {
    return this.http.get(url: this.baseUrl+"/products")
      .map((products:Product[]) => {
        return products.map(this.callbackfn:product => {
          return new Products(product)
      })
    }).catch(err =>  Observable.empty<Products[]>());
  }

}
