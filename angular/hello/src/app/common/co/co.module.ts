import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {TestComponent} from "../test/test.component";
import { MyRouterModule } from './router.module';

@NgModule({
  declarations:[
    // TestComponent,
  ],
  imports: [
    CommonModule,
    MyRouterModule
  ],
})
export class CoModule { }
