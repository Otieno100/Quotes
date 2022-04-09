// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes: Quotes[] = [
    new Quotes(1, 'first Quote', 0,0),
    new Quotes(2, 'second Quote',0,0),
    new Quotes(3, 'Third Quote',0,0),
    new Quotes(4, 'Fourth Quote',0,0),
    new Quotes(5, 'Fifth Quote',0,0),
    new Quotes(6,'last Quote',0,0),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
