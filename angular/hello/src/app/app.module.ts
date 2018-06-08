import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './common/nav/nav.component';
import { MessageComponent } from './common/message/message.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailComponent,
    NavComponent,
    MessageComponent,
    HeroAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
