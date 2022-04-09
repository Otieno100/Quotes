import { DatePipe } from '@angular/common';
import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  form=NgForm
  newQuote = new Quotes(0,"",0,0,Date);
  constructor() { }

  ngOnInit(): void {
  }

}
