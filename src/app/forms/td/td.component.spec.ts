import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TdComponent} from './td.component';
import {FormsModule} from "@angular/forms";

describe('TdComponent', () => {
  let component: TdComponent;
  let fixture: ComponentFixture<TdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdComponent],
      imports: [
        FormsModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
