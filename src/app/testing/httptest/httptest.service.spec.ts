import {TestBed} from '@angular/core/testing';

import {HttptestService} from './httptest.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {meetups} from "./db-data";

describe('HttptestService', () => {
  let service: HttptestService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttptestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all meetups', () => {
    service.getMeetup().subscribe((data) => {
      expect(data).withContext('No meetups returned').toBeTruthy();
      expect(data.data.length).withContext('incorrect number of meetups').toBe(5);
      const meetup = data.data.find((meetup: any) => meetup.id === 1);
      expect(meetup.attributes.title).toBe('test');
    });
    const req = httpTestingController.expectOne('http://localhost:1350/api/meetups');
    expect(req.request.method).toEqual('GET');
    req.flush({data: meetups});
  });

  it('should retrieve a meetup by id', () => {
    service.getMeetupById(1).subscribe((data) => {
      expect(data).withContext('No meetup returned').toBeTruthy();
      expect(data.data.id).withContext('incorrect meetup id').toBe(1);
      expect(data.data.attributes.title).toBe('test');
    });
    const req = httpTestingController.expectOne('http://localhost:1350/api/meetups/1');
    expect(req.request.method).toEqual('GET');
    req.flush({data: meetups[0]});

  });

  it('should create a meetup', () => {
    service.createMeetup(meetups[0]).subscribe((data) => {
      expect(data).withContext('No meetup returned').toBeTruthy();
      expect(data.data.id).withContext('incorrect meetup id').toBe(1);
      expect(data.data.attributes.title).toBe('test');
    })
    const req = httpTestingController.expectOne('http://localhost:1350/api/meetups');
    expect(req.request.method).toEqual('POST');
    req.flush({data: meetups[0]});
  });

  it('should give an error if save meetup fails', function () {
    service.createMeetup(meetups[0]).subscribe((data) => {
        fail('should have failed with 500 error');
      }, (error) => {
        expect(error.status).toBe(500);
      }
    )
    const req = httpTestingController.expectOne('http://localhost:1350/api/meetups');
    expect(req.request.method).toEqual('POST');
    req.flush('Save meetup failed', {status: 500, statusText: 'Internal Server Error'});

  });

  afterEach(() => {
    httpTestingController.verify();
  })
});
