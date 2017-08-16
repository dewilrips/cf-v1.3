import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DietdataProvider } from '../../providers/dietdata';
import { Storage } from '@ionic/storage';
import { Chart} from 'chart.js';
/**
 * Generated class for the MedremindPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})

export class ChartsPage {
   @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    barChart: any;
    doughnutChart: any;
    lineChart: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DietdataProvider,public storage: Storage ) {
    
    }

//    on page view displaying the chart and inserting data 
    ionViewDidLoad() {

        var meals =[]
        var mealTitles =['Breakfast','Lunch','Dinner']
        var mealStats = []

        this.dataService.getData().then((todos)=>{
            meals = JSON.parse(todos)
            console.log('meals',meals)
            var breakfastCounter= 0;
            var lunchCounter = 0;
            var dinnerCounter = 0;

            for(var meal of meals){
                //console.log('meal',meals)
                //mealTitles.push(meal.title)
                //console.log('meal title', meal.title)
                //mealStats.push(meal.quantity)
                if(meal.title=='Breakfast'){
                    breakfastCounter = breakfastCounter + parseInt(meal.quantity);
                    console.log("amaaaaaaa",meal.quantity)
                    
                }
            
                if(meal.title=='Lunch')
                    lunchCounter = lunchCounter + parseInt(meal.quantity)
                if(meal.title=='Dinner')
                    dinnerCounter = dinnerCounter + parseInt(meal.quantity)

                mealStats = [breakfastCounter,lunchCounter,dinnerCounter]
                console.log(mealStats)

            }
            this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                    labels: mealTitles ,
                datasets: [{
                    label: "Meals",
                    data: mealStats,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',  
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        }); 
       
this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: mealTitles,
                datasets: [{
                    label: '# of Votes',
                    data: mealStats,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: mealTitles,
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: mealStats,
                        spanGaps: false,
                    }
                ]
            }
 
        });
        
         })

    }
}