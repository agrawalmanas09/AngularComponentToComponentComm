import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { BikeComponent } from './bike/bike.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
