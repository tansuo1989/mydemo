import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMytest]'
})
export class MytestDirective {

  constructor(private el:ElementRef) { 
   el.nativeElement.style.color="red";
   el.nativeElement.onclick=function(){
     alert("来自指令的alert")
   }
  }

  @HostListener('mouseenter') in(){
    this.background("yellow");
  }
  @HostListener("mouseout") out(){
    // this.background("");
    this.el.nativeElement.style.backgroundColor="";
  }

  background(color){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
