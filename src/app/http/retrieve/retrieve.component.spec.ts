import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrieveComponent} from './retrieve.component';
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule
} from "@ngrx/store";
import {reducer} from "../../store/reducers/meetup/meetups.reducer";

describe('RetrieveComponent', () => {
  let component: RetrieveComponent;
  let fixture: ComponentFixture<RetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieveComponent],
      imports: [
        StoreModule.forRoot({meetups: reducer}, {}),
      ]


    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
