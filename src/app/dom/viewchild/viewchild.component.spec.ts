import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewchildComponent} from './viewchild.component';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('ViewchildComponent', () => {
  let component: ViewchildComponent;
  let fixture: ComponentFixture<ViewchildComponent>;


  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: {
        params: {
          id: 1
        }
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ViewchildComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }], imports: [RouterTestingModule]
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
