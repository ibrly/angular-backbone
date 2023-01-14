import {TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';
import {LoggerService} from "../logger/logger.service";
import createSpyObj = jasmine.createSpyObj;
// you can use f to focus on a single test
// or x to exclude a test

describe('CalculatorService', () => {
  let service: CalculatorService;
  let logger: jasmine.SpyObj<LoggerService>;
  beforeEach(() => {
    logger = createSpyObj('LoggerService', ['log'])

    TestBed.configureTestingModule({
      providers: [CalculatorService, {provide: LoggerService, useValue: logger}]
    });
    service = TestBed.inject(CalculatorService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers', () => {
    expect(service.add(1, 2)).toBe(3);
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith('add called');
  });
  it('should subtract two numbers', () => {
    expect(service.subtract(2, 1)).toBe(1);
  });
});
