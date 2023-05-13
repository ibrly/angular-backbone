import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveComponent} from './retrieve.component';
import {MeetupsService} from "../meetups.service";
import {of} from "rxjs";
import {meetups} from "../../testing/httptest/db-data";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RetrieveComponent', () => {
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
  it('should trigger retrieveMeetups method which is return observable', () => {
    expect(component.meetups$).toBeTruthy();
  });
  it('should render meetups', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('h2').length).toEqual(meetups.length);
  })
  it('should meetups$ length after ngOnInit be equal meetups length', () => {
    component.ngOnInit();
    component.meetups$.subscribe(meetupsItems => {
      expect(meetupsItems.length).toBe(meetups.length);
    })
  });
  it('should trigger deleteMeetup method', () => {
    component.onDelete(1);
    expect(meetupsService.deleteMeetup).toHaveBeenCalled();
  })

});
