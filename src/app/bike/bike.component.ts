import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {

  @Output() emitShowBikeFlag = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    console.log("Trying to emit event");
    this.emitShowBikeFlag.emit(false);
  }

}
