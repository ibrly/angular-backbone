import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    return value.length > 10 ? value.substring(0, limit) + '...' : value;
  }

}
