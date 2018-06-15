import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{TestComponent} from "../test/test.component";

var r:Routes=[
  {path:"co/test",component:TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(r),
  ],
  exports:[RouterModule],
  declarations: [
    TestComponent
  ]
})
export class MyRouterModule { }
