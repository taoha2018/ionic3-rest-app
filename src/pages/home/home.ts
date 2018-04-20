import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Observable} from "rxjs/Observable";

class Product {
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products:Observable<Product[]>;

  constructor(public navCtrl: NavController,
               private restProvider:RestProvider) {

  }

}
