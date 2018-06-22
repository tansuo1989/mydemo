import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hi'
})
export class HiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
