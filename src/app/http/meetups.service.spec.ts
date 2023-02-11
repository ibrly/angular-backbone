import {TestBed} from '@angular/core/testing';

import {MeetupsService} from './meetups.service';
import createSpyObj = jasmine.createSpyObj;
import {Store} from "@ngrx/store";

describe('MeetupsService', () => {
  let service: MeetupsService;
  let store = createSpyObj('Store', ['select', 'dispatch']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{provide: Store, useValue: store}]
    });
    service = TestBed.inject(MeetupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
