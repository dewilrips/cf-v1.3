import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DietdataProvider } from '../../providers/dietdata';
/**
 * Generated class for the BmiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
    bmiDate:string;
    weightIn:number;
    heightIn:number;
    health:string;
    result:number;

   //public bmiitems = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DietdataProvider) {

    // this.dataService.getData().then((forGraph) => {
 
    //   if(forGraph){
  
    //     this.bmiitems = JSON.parse(forGraph);  
    //     console.log("mee ekkalha",forGraph)
    //   }
    // });
    
  }


  ionViewDidLoad() {
    
    console.log('ionViewDidLoad BmiPage');
  }
  //   saveOne(){

  //   let newItem = {
      
  //   bmiDate: this.bmiDate,
  //   result: this.result,
      
  //   };
 
  
 
  // }

//  saveResult(item){
//     this.bmiitems.push(item);
//     this.dataService.savebmi(this.bmiitems);
//   }
    calculateBMI(){
    
      var height = this.heightIn / 39.3700787;
      var weight  = this.weightIn / 2.20462;
      var bmiDate = this.bmiDate

      // calculation

      var BMI = weight /Math.pow(height, 2);
      this.result = Math.round(BMI * 100) / 100;
      var output = Math.round(BMI * 100) / 100;
      var health = "";
      if (output < 18.5)
          this.health = "Underweight";
      else if (output >= 18.5 && output <= 25)
          this.health = "Normal";
      else if (output >= 25 && output <= 30)
          this.health = "Obese";
      else if (output > 30)
          this.health = "Overweight";
       
  }

}
