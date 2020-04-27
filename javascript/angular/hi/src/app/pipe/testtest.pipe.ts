import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testtest'
})
export class TesttestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
