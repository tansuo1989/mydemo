import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<app-nav></app-nav><router-outlet></router-outlet>`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
