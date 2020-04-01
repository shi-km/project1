import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'No man is an island', 'unknown',new Date(1980,7,12)),
    new Quote(2,'Every man for himself','george',new Date(2000,4,20)),
    new Quote(3,'I am a slow walker, but I never walk back','Abraham Lincoln',new Date(2015,5,13)),
    new Quote(4,'There are no bad pictures; that’s just how your face looks sometimes','Mahatma Gadhi',new Date(2018,6,24)),
  ]
  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quote){
    let QuoteLength = this.quotes.length;
    quote.id = QuoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
