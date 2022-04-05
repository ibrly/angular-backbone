import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomComponent } from './dom.component';

describe('DomComponent', () => {
  let component: DomComponent;
  let fixture: ComponentFixture<DomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
