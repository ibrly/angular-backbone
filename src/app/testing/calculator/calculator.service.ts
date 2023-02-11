import {Injectable} from '@angular/core';
import {LoggerService} from "../logger/logger.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) {
  }


  add(a: number, b: number): number {
    this.logger.log('add called');
    return a + b;
  }

  subtract(a: number, b: number): number {
    this.logger.log('subtract called');
    return a - b;
  }
}
