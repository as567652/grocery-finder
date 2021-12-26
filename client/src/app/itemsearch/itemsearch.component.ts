import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemsearch',
  templateUrl: './itemsearch.component.html',
  styleUrls: ['./itemsearch.component.scss']
})
export class ItemsearchComponent implements OnInit {

  search : String ="";
  distance : Number = 0.5;
  
  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: Number) {
      this.distance = value;
      return value + ' km';
  }

  gridsize: number = 0.5;
  updateSetting(event) {
    this.gridsize = event.value;
  }
}
 