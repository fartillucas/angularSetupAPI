import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { StationsComponent } from './stations/stations.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmsRegionComponent } from './alarms-region/alarms-region.component';
import { AlarmsStationComponent } from './alarms-station/alarms-station.component';
import { GraphComponent } from './graph/graph.component';



const routes: Routes = [
  { path: 'region', component: RegionsComponent },
  { path: 'station', component: StationsComponent },
  { path: 'forecast', component: ForecastsComponent },
  { path: 'alarm', component: AlarmsComponent },
  { path: 'alarmsregion', component: AlarmsRegionComponent },
  { path: 'alarmsstation', component: AlarmsStationComponent },
  { path: 'graph', component: GraphComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
