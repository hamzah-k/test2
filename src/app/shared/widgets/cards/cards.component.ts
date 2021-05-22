import { Component, OnInit } from '@angular/core';
import *  as highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Input } from '@angular/core';
@Component({
  selector: 'app-widjet-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() lable: string;
  @Input() total: string;
  @Input() pescentage: string;
  @Input() data: [];

  Highcharts = highcharts;
  chartOptions: {};
  constructor() { }


  ngOnInit(): void {
    this.chartOptions = { chart: {
      type: 'area',
      backgroundColor: null,
      borderWidth: 0,
      margin: [2, 2, 2, 0],
      height: 60
  },
  title: {
      text: null
  },
  subtitle: {
      text: null
  },
  // xAxis: {
  //   lables: {
  //     enabled: false
  //   },
  //   title: { text: null }, startOnTick: false,endOnTicks:false,tickOptions:[]
  // },
  // yAxis: {
  //   lables: {
  //     enabled: false
  //   },
  //   title: { text: null }, startOnTick: false,endOnTicks:false,tickOptions:[]
  // },
      credits: {
        enabled : false
      }
      ,
      exporting: {
        enabled : false
      },
  tooltip: {
    split: true,
    outside: true
      }, legend: {
        enable : false
      },
  plotOptions: {
      area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 0,
          marker: {
              lineWidth: 0,
              lineColor: '#666666'
          }
      }
  },
  series: [{
      data: [1000, 635, 3634, 5268]
  }, ]

    };
    HC_exporting(highcharts);
    setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);

  }

}
