import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewchildComponent} from './viewchild.component';
import {ActivatedRoute, Router} from "@angular/router";

describe('ViewchildComponent', () => {
  let component: ViewchildComponent;
  let fixture: ComponentFixture<ViewchildComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      params: {
        id: 1
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewchildComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }],
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
