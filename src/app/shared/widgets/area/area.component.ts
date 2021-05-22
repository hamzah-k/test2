import { Component, OnInit, Input } from '@angular/core';
import *  as highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor() { }
  chartOptions: {};
  Highcharts = highcharts;
  @Input() data: [];
  ngOnInit(): void {
      this.chartOptions =  { chart: {
        type: 'area'
    },
    title: {
        text: 'خبرات حمزة على مر العصور'
    },
    subtitle: {
        text: 'Source: 0981217183'
    },
    xAxis: {
        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Months'
        },
        labels: {
            formatter() {
                return this.value / 1250;
            }
        }
        },
        credits: {
          enabled : false
        }
        ,
        exporting: {
          enabled : true
        },
    tooltip: {
        split: true,
        valueSuffix: ' Exp'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
        series: this.data

      };
      HC_exporting(highcharts);
      setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);



  }
}

