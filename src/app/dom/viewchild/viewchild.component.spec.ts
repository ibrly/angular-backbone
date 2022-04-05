import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildComponent } from './viewchild.component';

describe('ViewchildComponent', () => {
  let component: ViewchildComponent;
  let fixture: ComponentFixture<ViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
