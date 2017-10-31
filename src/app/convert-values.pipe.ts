import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertValues'
})
export class ConvertValuesPipe implements PipeTransform {

  transform(values: any[], args?: any): any {    
    return values.map(value => value*10);      
  }

}
