import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GuideService} from '../../providers/guide-service-mock';



@Component({
  selector: 'page-dietdetail',
  templateUrl: 'dietdetail.html',
})
export class DietdetailPage {
guide: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: GuideService) {
    this.guide = this.navParams.data;
        service.findById(this.guide.id).then(
            guide => this.guide = guide
        );
  }

  ionViewDidLoad() {
  console.log('ionViewDidLoad DietdetailPage');
  }

}
