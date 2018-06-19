import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {TestComponent} from "../test/test.component";
import { MyRouterModule } from './router.module';
import {ParentComponent} from "../parent/parent.component";

/* var r:Routes=[
  {path:"co/test",component:TestComponent},
  // {path:"co/parent",component:ParentComponent},
]; */


@NgModule({
  declarations:[
    // TestComponent,
    // ParentComponent
  ],
  imports: [
    // RouterModule.forChild(r),
    CommonModule,
    MyRouterModule
  ],
})
export class CoModule { }
