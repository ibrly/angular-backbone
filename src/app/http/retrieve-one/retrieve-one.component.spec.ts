import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveOneComponent} from './retrieve-one.component';
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../store/reducers/meetup/meetups.reducer";

describe('RetrieveOneComponent', () => {
  let component: RetrieveOneComponent;
  let fixture: ComponentFixture<RetrieveOneComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        StoreModule.forRoot({meetups: reducer}, {}),
      ],
      declarations: [RetrieveOneComponent]

    }).compileComponents();
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
