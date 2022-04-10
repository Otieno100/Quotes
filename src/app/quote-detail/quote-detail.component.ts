import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {

  @Input() quotes!: Quotes ;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() { }
 


  quotesDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quotesComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  ngOnInit(): void {
  }

}
