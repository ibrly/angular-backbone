import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveOneComponent } from './retrieve-one.component';

describe('RetrieveOneComponent', () => {
  let component: RetrieveOneComponent;
  let fixture: ComponentFixture<RetrieveOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveOneComponent ]
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
