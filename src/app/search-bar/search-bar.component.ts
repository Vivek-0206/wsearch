import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';

  @Output() submited = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInput(value: any) {
    this.term = value.target.value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submited.emit(this.term);
  }
}
