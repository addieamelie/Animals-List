import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-textbox',
  template: `
  <input type =text class="searchInput"
        placeholder = "Type animal..."
        [(ngModel)] = "filter" /> `
})

export class FilterTextboxComponent implements OnInit {

  //Filter the results according to input

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val:string) {
    this._filter = val;
    this.changed.emit(this.filter); // Raise changed event
  }

  //Emit the value of filter to the parent
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
