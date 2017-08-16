import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DietmondetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dietmondetail',
  templateUrl: 'dietmondetail.html',
})
export class DietmondetailPage {
  title;
  description;
  myDate;
  time;
  quantity;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.quantity = this.navParams.get('item').quantity;
    this.myDate = this.navParams.get('item').myDate;
    this.time = this.navParams.get('item').time;

  }

}
