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
import { AlarmsComponent } from './alarms/alarms.component';
import { ShowAlarmsComponent } from './alarms/show-alarms/show-alarms.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ShowForecastsComponent } from './forecasts/show-forecasts/show-forecasts.component';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    ShowStationsComponent,
    RegionsComponent,
    ShowRegionsComponent,
    AlarmsComponent,
    ShowAlarmsComponent,
    ForecastsComponent,
    ShowForecastsComponent,

  ],
  imports: [
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
