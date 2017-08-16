import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GuideService} from '../../providers/guide-service-mock';
//import {PropertyDetailPage} from '../property-detail/property-detail';
import {DietdetailPage} from '../dietdetail/dietdetail';
/**
 * Generated class for the DietguidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dietguide',
  templateUrl: 'dietguide.html',
})
export class DietguidePage {
guides: Array<any>;

  constructor(public navCtrl: NavController, public service: GuideService) {
        service.findAll().then(data => this.guides = data);
    }

    openDietdetail(guide) {
        this.navCtrl.push(DietdetailPage, guide);
    }



}
