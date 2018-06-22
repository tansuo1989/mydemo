import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../page/home/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../../page/home/index/index.component';
import { ListComponent } from '../../page/home/list/list.component';
import { MytestDirective } from '../../directive/mytest.directive';

const myrouter:Routes=[
  {path:"home",children:[
    {path:"index",component:IndexComponent},
    {path:"about",component:AboutComponent},
    {path:"list",component:ListComponent}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myrouter),
  ],
  declarations: [
    MytestDirective,
    AboutComponent, 
    IndexComponent,
    ListComponent,
  ]
})
export class HomeModule { }
