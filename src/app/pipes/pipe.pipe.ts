import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, limit = 10): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
