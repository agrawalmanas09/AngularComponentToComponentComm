import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { BikeComponent } from './bike/bike.component';


const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: CarsComponent},
  {path: 'bike', component: BikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
