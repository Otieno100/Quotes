import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Output() userData = new EventEmitter<Quotes>();

  newQuote = new Quotes( "", "", "", "", "", new Date);
  constructor() { }

  submitForm() { 
    this.userData.emit(this.newQuote);
  }

  ngOnInit(): void {
  }

}
