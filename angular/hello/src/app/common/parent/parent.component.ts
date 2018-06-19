import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  age:Number=99;
  constructor() { }

  ngOnInit() {
  }
  add(e){
    console.log(e)
    this.age=e.age;
  }

}
