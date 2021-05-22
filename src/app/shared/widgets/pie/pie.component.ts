import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import *  as highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = highcharts;
  chartOptions: {};
  constructor() { }
  @Input() datA = [];

  ngOnInit(): void {

    let colors = highcharts.getOptions().colors,
    categories = [
        'Chrome',
        'Firefox',
        'Internet Explorer',
        'Safari',
        'Edge',
        'Opera',
        'Other'
    ],
    data = this.datA,
    browserData = [],
    versionsData = [],
    i,
    j,
   // dataLen = this.arrayData.length,
    drillDataLen,
    brightness;
    console.log(data);


// Build the data arrays
    for (i = 0; i < data.length; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: highcharts.color(data[i].color).brighten(brightness).get()
        });
    }
}
    this.chartOptions = {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Browser market share, January, 2018'
      },
      subtitle: {
          text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      plotOptions: {
          pie: {
              shadow: false,
              center: ['50%', '50%']
          }
      },
      tooltip: {
          valueSuffix: '%'
      },
      series: [{
          name: 'Browsers',
          data: browserData,
          size: '60%',
          dataLabels: {
              formatter() {
                  return this.y > 5 ? this.point.name : null;
              },
              color: '#ffffff',
              distance: -30
          }
      }, {
          name: 'Versions',
          data: versionsData,
          size: '80%',
          innerSize: '60%',
          dataLabels: {
              formatter() {
                  // display only if larger than 1
                  return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                      this.y + '%' : null;
              }
          },
          id: 'versions'
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 400
              },
              chartOptions: {
                  series: [{
                  }, {
                      id: 'versions',
                      dataLabels: {
                          enabled: false
                      }
                  }]
              }
          }]
      }
    };
    // setTimeout(()=> {
    //   window.dispatchEvent(new Event('resize'))
    // },300)
    console.log(data);

  }
  /////////////////////////////////////////////////////////
  //
  ///////////////////////////////////////////////////

}
