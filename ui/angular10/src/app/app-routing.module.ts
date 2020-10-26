import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { StationsComponent } from './stations/stations.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ForecastsComponent } from './forecasts/forecasts.component';

const routes: Routes = [
  { path: 'region', component: RegionsComponent },
  { path: 'station', component: StationsComponent },
  { path: 'alarm', component: AlarmsComponent },
  { path: 'forecast', component: ForecastsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
