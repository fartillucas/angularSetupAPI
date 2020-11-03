import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { StationsComponent } from './stations/stations.component';


const routes: Routes = [
  { path: 'region', component: RegionsComponent },
  { path: 'station', component: StationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
