import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'No man born of a woman can defeat me', 'Adolf Hitler',new Date(1990,3,14)),
    new Quote(2,'Every moment has a fresh beginning','prof Wangari Maathai',new Date(2002,3,14)),
    new Quote(3,'Change the world by being yourself','Barrack Obama',new Date(2017,3,14)),
    new Quote(4,'Die with memories not dreams','Mahatma Gadhi',new Date(2019,3,14)),
  ]
}
