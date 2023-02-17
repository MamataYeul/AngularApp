import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitCount'
 
})
export class PipeassignmentPipe implements PipeTransform {

  transform(value:number): number{
    return value.toString().length;
  }
}
