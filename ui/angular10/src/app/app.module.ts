import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { ShowStationsComponent } from './stations/show-stations/show-stations.component';
import { RegionsComponent } from './regions/regions.component';
import { ShowRegionsComponent } from './regions/show-regions/show-regions.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ShowForecastsComponent } from './forecasts/show-forecasts/show-forecasts.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ShowAlarmsComponent } from './alarms/show-alarms/show-alarms.component';
import { AlarmsRegionComponent } from './alarms-region/alarms-region.component';
import { AlarmsStationComponent } from './alarms-station/alarms-station.component';
import { ShowAlarmsRegionComponent } from './alarms-region/show-alarms-region/show-alarms-region.component';
import { ShowAlarmsStationComponent } from './alarms-station/show-alarms-station/show-alarms-station.component';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { ShowGraphComponent } from './graph/show-graph/show-graph.component';






@NgModule({
  declarations: [
    ChartsModule,
    AppComponent,
    StationsComponent,
    ShowStationsComponent,
    RegionsComponent,
    ShowRegionsComponent,
    ForecastsComponent,
    ShowForecastsComponent,
    AlarmsComponent,
    ShowAlarmsComponent,
    AlarmsRegionComponent,
    AlarmsStationComponent,
    ShowAlarmsStationComponent,
    ShowAlarmsRegionComponent,
    GraphComponent,
    ShowGraphComponent,



  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
