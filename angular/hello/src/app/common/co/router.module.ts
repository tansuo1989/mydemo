import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ TestComponent } from "../test/test.component";
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

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
  ],
  exports:[RouterModule],
  declarations: [
    TestComponent,
    ParentComponent,
    ChildComponent,
  ]
})
export class MyRouterModule { }
