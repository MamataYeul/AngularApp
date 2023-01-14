import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeassignment'
})
export class PipeassignmentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
