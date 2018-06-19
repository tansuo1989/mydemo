import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import router from "./router";
import {HeroesComponent} from "./app/heroes/heroes.component";
import {DetailComponent} from "./app/detail/detail.component";
import { HeroAddComponent } from "./app/hero-add/hero-add.component";

const r:Routes=[
    {path:"",component:HeroAddComponent},
    {path:"hero",component:HeroesComponent},
    {path:"detail/:id",component:DetailComponent},
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(r,{ useHash: true }) ]
})
export class AppRoutingModule { }
