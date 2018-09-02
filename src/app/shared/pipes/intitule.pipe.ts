import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intitule'
})
export class IntitulePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ') : '';
  }

}
