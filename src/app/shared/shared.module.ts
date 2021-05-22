import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent } from '../shared/component/header/header.component';
import { SidebarComponent } from '../shared/component/sidebar/sidebar.component';
import { FoooterComponent } from '../shared/component/foooter/foooter.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';
@NgModule({
  declarations: [HeaderComponent, FoooterComponent, SidebarComponent, AreaComponent, CardsComponent, PieComponent ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FoooterComponent,
    AreaComponent,
    CardsComponent,
    PieComponent

  ]
})
export class SharedModule { }
