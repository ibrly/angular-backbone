import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveOneComponent} from './retrieve-one.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../store/reducers/meetup/meetups.reducer";
import {ActivatedRoute} from "@angular/router";

describe('RetrieveOneComponent', () => {
  let component: RetrieveOneComponent;
  let fixture: ComponentFixture<RetrieveOneComponent>;
  const fakeActivatedRoute = {
    params: {
      subscribe: () => {
      }
    }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieveOneComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }],
      imports: [RouterTestingModule,
        StoreModule.forRoot({meetups: reducer}, {}),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
