import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxChartsModule ],
  declarations: [ AppComponent, HelloComponent, PieChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
