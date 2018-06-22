import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) //后面不能加分号
  private cc:ChildComponent; //始初化必须紧跟在@ViewChild()后面，中间不能有其它代码

  age:Number=99;
  pname:string="pname";
  mydata=[1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }
  add(e){
    console.log(e)
    this.age=e.age;
  }
  test(){
    this.cc.alert();
    //console.log(this.cc)
  }
  myadd(i){
    return i+2;
  }

}
