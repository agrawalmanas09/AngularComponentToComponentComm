import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public isBike: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showBikes(){
    // this.isBike = !this.isBike;
    this.isBike = true;
  }

  catchBikeFlag(ev: any){
    console.log("Emitted Bike event : ", ev);
    this.isBike = ev;
  }

}
