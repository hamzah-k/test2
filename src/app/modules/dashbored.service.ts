import { Injectable } from '@angular/core';
import *  as highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Injectable({
  providedIn: 'root'
})
export class DashboredService {

  constructor() { }
  bigData() {
    return [
      {
        name: 'Angular',
        data: [1000, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'C#',
        data: [2000, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Node',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'NgRx',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'ASP.Net Core',
        data: [2, 2, 2, 6, 13, 30, 46]
      }
    ];
  }
  cardsReturn() {
    return [1000, 635, 3634, 5268];
  }
  pieReplay() {
    const colors = highcharts.getOptions().colors;
    let array;
    array = [
      {
          y: 62.74,
          color: colors[2],
          drilldown: {
              name: 'Chrome',
              categories: [
                  'Chrome v65.0',
                  'Chrome v64.0',
                  'Chrome v63.0',
                  'Chrome v62.0',
                  'Chrome v61.0',
                  'Chrome v60.0',
                  'Chrome v59.0',
                  'Chrome v58.0',
                  'Chrome v57.0',
                  'Chrome v56.0',
                  'Chrome v55.0',
                  'Chrome v54.0',
                  'Chrome v51.0',
                  'Chrome v49.0',
                  'Chrome v48.0',
                  'Chrome v47.0',
                  'Chrome v43.0',
                  'Chrome v29.0'
              ],
              data: [
                  0.1,
                  1.3,
                  53.02,
                  1.4,
                  0.88,
                  0.56,
                  0.45,
                  0.49,
                  0.32,
                  0.29,
                  0.79,
                  0.18,
                  0.13,
                  2.16,
                  0.13,
                  0.11,
                  0.17,
                  0.26
              ]
          }
      },
      {
          y: 10.57,
          color: colors[1],
          drilldown: {
              name: 'Firefox',
              categories: [
                  'Firefox v58.0',
                  'Firefox v57.0',
                  'Firefox v56.0',
                  'Firefox v55.0',
                  'Firefox v54.0',
                  'Firefox v52.0',
                  'Firefox v51.0',
                  'Firefox v50.0',
                  'Firefox v48.0',
                  'Firefox v47.0'
              ],
              data: [
                  1.02,
                  7.36,
                  0.35,
                  0.11,
                  0.1,
                  0.95,
                  0.15,
                  0.1,
                  0.31,
                  0.12
              ]
          }
      },
      {
          y: 7.23,
          color: colors[0],
          drilldown: {
              name: 'Internet Explorer',
              categories: [
                  'Internet Explorer v11.0',
                  'Internet Explorer v10.0',
                  'Internet Explorer v9.0',
                  'Internet Explorer v8.0'
              ],
              data: [
                  6.2,
                  0.29,
                  0.27,
                  0.47
              ]
          }
      },
      {
          y: 5.58,
          color: colors[3],
          drilldown: {
              name: 'Safari',
              categories: [
                  'Safari v11.0',
                  'Safari v10.1',
                  'Safari v10.0',
                  'Safari v9.1',
                  'Safari v9.0',
                  'Safari v5.1'
              ],
              data: [
                  3.39,
                  0.96,
                  0.36,
                  0.54,
                  0.13,
                  0.2
              ]
          }
      },
      {
          y: 4.02,
          color: colors[5],
          drilldown: {
              name: 'Edge',
              categories: [
                  'Edge v16',
                  'Edge v15',
                  'Edge v14',
                  'Edge v13'
              ],
              data: [
                  2.6,
                  0.92,
                  0.4,
                  0.1
              ]
          }
      },
      {
          y: 1.92,
          color: colors[4],
          drilldown: {
              name: 'Opera',
              categories: [
                  'Opera v50.0',
                  'Opera v49.0',
                  'Opera v12.1'
              ],
              data: [
                  0.96,
                  0.82,
                  0.14
              ]
          }
      },
      {
          y: 7.62,
          color: colors[6],
          drilldown: {
              name: 'Other',
              categories: [
                  'Other'
              ],
              data: [
                  7.62
              ]
          }
      }
   ];

    return array;

  }
}
