import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeModule} from "../app/module/home/home.module";
import {RouterModule,Routes} from "@angular/router";
import { IndexComponent } from './page/home/index/index.component';
import { NavComponent } from './page/common/nav/nav.component';

const r:Routes=[
  {path:"",component:IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,NavComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(r,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
