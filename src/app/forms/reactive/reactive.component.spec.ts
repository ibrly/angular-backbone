import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveComponent} from './reactive.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveComponent], imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
