import { Component, OnInit } from '@angular/core';
import { Hero } from "../data/hero";
// import {list} from "./hero/list";
import { HeroService} from "../service/hero.service";
import { MessageService } from "../service/message.service";
import { ActivatedRoute } from '@angular/router';

interface j{
  status:number,
  info:Hero[],
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  now:Hero|string;
  all:Hero[];

  constructor(
    private HeroService:HeroService,
    private msg:MessageService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id");
    console.log("Id:",id);
    this.getHeroes();
  }
  getHeroes():void{
    this.HeroService.getHeroes().subscribe((h:j)=>{
      console.log(h);
      this.all=h.info;
    });
  }
  myselect(v:Hero):void{
    this.now=v;
  }
  del(hero:Hero){
    this.all=this.all.filter(v=>v!=hero)
    this.HeroService.delHero(hero.id).subscribe((d:j)=>{
      this.msg.show(d.info.toString());
    })
  }
  edit(){
    console.log(this.now)
    this.HeroService.putHero(this.now).subscribe((d:j)=>{
      this.msg.show(d.info.toString());
      if(d.status==1){
        this.now="";
      }
    })
  }

}
