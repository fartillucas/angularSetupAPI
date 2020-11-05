import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { StationsComponent } from './stations/stations.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { AlarmsComponent } from './alarms/alarms.component';



const routes: Routes = [
  { path: 'region', component: RegionsComponent },
  { path: 'station', component: StationsComponent },
  { path: 'forecast', component: ForecastsComponent },
  { path: 'alarm', component: AlarmsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
