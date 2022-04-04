import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEventsBindingComponent } from './c-events-binding.component';

describe('CEventsBindingComponent', () => {
  let component: CEventsBindingComponent;
  let fixture: ComponentFixture<CEventsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEventsBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEventsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
