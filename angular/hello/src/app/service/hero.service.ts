import { Injectable } from '@angular/core';
import {Hero} from "../data/hero";
import {list} from "../data/list";
import { Observable, of } from 'rxjs';
import {MessageService} from "./message.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

//
// interface r{
//   status:number;
//   info:Hero[]|Object|String
// }

export class HeroService {
  private api="http://test.gui.com/Angular/";
  constructor(
    private msg:MessageService,
    private http:HttpClient,
  ) { }
 
  getHero(id:number){
     let data={id:id};
     this.msg.show("Loading...");
     return this.http.post(this.api+"get_hero",data);
  }

  getHeroes(){
    this.msg.show("Loading...");
    return this.http.get(this.api+"index");
  }

  addHero(name:string){
    let data={name:name};
    this.msg.show("Loading...");
    return this.http.post(this.api+"add_hero",data);
  }

  putHero(h:Hero|string){
    this.msg.show("Loading...");
     return this.http.post(this.api+"put_hero",h);
  }

  delHero(id:number){
    let data={id:id};
    this.msg.show("Loading...");
    return this.http.post(this.api+"del_hero",data);
  }

}
