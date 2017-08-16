import {Component} from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {DietmonaddPage} from '../dietmonadd/dietmonadd';
import {DietmondetailPage} from '../dietmondetail/dietmondetail';
import { DietdataProvider } from '../../providers/dietdata';



@Component({
   
    selector: 'page-dietmon',
    templateUrl: 'dietmon.html'
})
export class DietmonPage {

public items = [];
public itemsWithStatus;

constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public dataService: DietdataProvider) {
   this.dataService.getData().then((todos) => {
 
      if(todos){
  
        this.items = JSON.parse(todos);  
      }
    });
}
  ionViewDidLoad(){
 
  } 
  
 addItem(){
 
    let addModal = this.modalCtrl.create(DietmonaddPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
    });
    addModal.present();
 
  }
//  Save Item
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
//  view item using view controll imported
 viewItem(item){
  this.navCtrl.push(DietmondetailPage, {
    item: item
  });
}
// Delete funtion
 delete(index: number) {
        this.items.splice(index, 1);
        this.dataService.save(this.items);
    }     
}
