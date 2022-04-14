import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateComponent} from './create.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../store/reducers/meetup/meetups.reducer";
import {FormsModule} from "@angular/forms";

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [
        StoreModule.forRoot({meetups: reducer}, {}),
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
