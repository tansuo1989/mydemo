import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from "../data/hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../service/hero.service';
import { MessageService } from '../service/message.service';

interface j{
  status:number;
  info:Hero;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() hero:Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private msg:MessageService,
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(){
    const id=+this.route.snapshot.paramMap.get('id');
    console.log(id)
    // this.heroService.getHero(id)
    // .subscribe(hero => this.hero = hero);
    this.heroService.getHero(id).subscribe((d:j)=>{
         if(d.status==1){
              this.hero=d.info;
         }else{
           this.msg.show(d.info.toString());
         }
    });

  }
  back(){
    this.location.back();
  }

}
