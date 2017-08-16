import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
//import {DietmonPage} from '../dietmon/dietmon';


@Component({
  selector: 'page-dietmonadd',
  templateUrl: 'dietmonadd.html'
})
export class DietmonaddPage {
      title;
      description;
      myDate;
      time;
      quantity;
  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }
  saveItem(){

    let newItem = {
      
      title: this.title,
      description: this.description,
      quantity: this.quantity,
      myDate: this.myDate,
      time: this.time,
      
    };
 
    this.view.dismiss(newItem);
 
  }
  close(){
    this.view.dismiss();
  }   

}
