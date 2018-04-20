import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Observable} from "rxjs/Observable";
import {Product} from "../../models/product";
import {ProductPage} from "../product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products:Observable<Product[]>;

  constructor(public navCtrl: NavController,
              private restProvider:RestProvider) {

  }

  //life cycle method
  ionViewDidLoad() {
    this.products = this.restProvider.getProducts();
  }
  //product 상세보기 페이지로 이동
  navToProductDetail(product:Product) {
    this.navCtrl.push("ProductPage",{product:product});
  }


}
