import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StoreDetailPage } from '../store-detail/store-detail';
import { StoreProvider } from '../../providers/store/store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;

  constructor(public navCtrl: NavController, public storeProvider:StoreProvider) {
    this.stores = storeProvider.getAll();
  }

  /* Method die gfired wordt wanneer de pagina klaar is */
  ionViewDidLoad(){
    console.log("ionViewLoaded HomePage");
  }

  openPage(){
    //een nieuwe pagina toevoegen aan de navstack en erna navigeren
    this.navCtrl.push(LoginPage);
  }

  showDetail(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }

}
