import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hehe'
})
export class HehePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
