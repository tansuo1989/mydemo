import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string[]=[];
  msg:string="";
  constructor() { }
  add(msg:string){
    this.message.push(msg);
  }

  clear(){
    this.message=[];
    this.msg="";
  }
  show(msg:string){
    this.message=[];
    this.msg=msg;
  }

}
