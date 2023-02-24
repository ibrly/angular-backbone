import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveOneComponent} from './retrieve-one.component';
import {RouterTestingModule} from "@angular/router/testing";
import {reducer} from "../../store/reducers/meetup/meetups.reducer";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

describe('RetrieveOneComponent', () => {
  let component: RetrieveOneComponent;
  let fixture: ComponentFixture<RetrieveOneComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, StoreModule.forRoot({meetups: reducer}, {}),
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
