import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveComponent} from './retrieve.component';
import {HttpModule} from "../http.module";
import {MeetupsService} from "../meetups.service";
import {of} from "rxjs";
import {meetups} from "../../testing/httptest/db-data";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

fdescribe('RetrieveComponent', () => {
  let component: RetrieveComponent;
  let fixture: ComponentFixture<RetrieveComponent>;
  let meetupsService: any;
  beforeEach(async () => {
    const meetupsServiceSpy = jasmine.createSpyObj('MeetupsService', ['retrieveMeetups', 'deleteMeetup']);
    await TestBed.configureTestingModule({
      declarations: [RetrieveComponent],
      imports: [
        HttpClientTestingModule,RouterTestingModule,BrowserAnimationsModule
      ], providers: [{provide: MeetupsService, useValue: meetupsServiceSpy}]


    })
      .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveComponent);
    component = fixture.componentInstance;
    meetupsService = TestBed.inject(MeetupsService);
    meetupsService.retrieveMeetups.and.returnValue(of(meetups));

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should trigger retrieveMeetups method which is return observable', function () {
    meetupsService.retrieveMeetups.and.returnValue(of(meetups));
    fixture.detectChanges()
    expect(component.meetups).toBeTruthy();

  });
});
