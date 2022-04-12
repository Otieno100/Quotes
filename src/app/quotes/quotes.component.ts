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
    new Quotes( 'Brian white', "black African", "inspiration", "Life is like a sketch of your own ....", "j masson benter", new Date(2022, 4, 10,),0,0),
    new Quotes( 'Brian white', "black African", "inspiration", "The greatest there was is just the squreroot of your success", "mason", new Date(2022, 3, 10),0,0),
    new Quotes( 'Brian white', "black African", "inspiration", "humility is  virtue ", "j masson benter", new Date(2022, 3, 10),0,0)
    
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
   upVotesQuotes(index:number){
    var app = this.quotes [index].upVotes+1;
this.quotes [index].upVotes=app
   }

   downVotesQuotes(index:number){
    var app = this.quotes [index].downVotes+1;
    this.quotes [index].downVotes=app
   }



  ngOnInit(): void {
  }

}
