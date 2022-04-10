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
    new Quotes( 'blue Wayne', "black African", "loveQuotes", "whoever loves gets blinded", "j masson benter", new Date(2022, 7, 1)),
    new Quotes( 'blue wayne', "black African", "loveQuote", "whoever loves gets blindid", "mason", new Date(2022, 7, 1)),
    new Quotes( 'blue quote', "black African", "loveQuotes", "whoever loves gets blinded", "j masson benter", new Date(2022, 7, 1)),
    
  ];


  constructor() { }

  submitData(myN:Quotes) {
    this.quotes.push(myN)
   }
   toggle(index:number){
     this.quotes[index].showDescription= !this.quotes[index].showDescription
   }

   deleteQuotes(index:number){
     this.quotes.splice(index,1)
   }



  ngOnInit(): void {
  }

}
