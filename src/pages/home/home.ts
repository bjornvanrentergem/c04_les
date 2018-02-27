import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StoreDetailPage } from '../store-detail/store-detail';
import { StoreProvider } from '../../providers/store/store';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;

  constructor(public navCtrl: NavController, public storeProvider:StoreProvider, public app:App) {
    this.stores = storeProvider.getAll();
  }

  /* Method die gfired wordt wanneer de pagina klaar is */
  ionViewDidLoad(){
    console.log("ionViewLoaded HomePage");
  }

  showDetail(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }

  cancelOrder(){
    console.log("Cancelling order")
    this.app.getRootNav().setRoot(LoginPage);
  }

}
