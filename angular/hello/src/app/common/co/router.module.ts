import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ TestComponent } from "../test/test.component";
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import {FormsModule} from "@angular/forms";
import {MyfilterPipe} from "../../../myfilter.pipe";
import {MyPipe} from "../pipe/my.pipe";
import{CommonModule} from "@angular/common";

var r:Routes=[
  {path:"co/test",component:TestComponent},
  {path:"child",
  children:[
    {path:"hi",component:ChildComponent},
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(r),
    FormsModule,
    CommonModule
  ],
  exports:[RouterModule],
  declarations: [
    TestComponent,
    ParentComponent,
    ChildComponent,
    MyfilterPipe,
    MyPipe
  ]
})
export class MyRouterModule { }
