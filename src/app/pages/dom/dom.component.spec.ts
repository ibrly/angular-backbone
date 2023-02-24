import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DomComponent} from './dom.component';
import {ViewchildComponent} from "../../dom/viewchild/viewchild.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('DomComponent', () => {
  let component: DomComponent;
  let fixture: ComponentFixture<DomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomComponent, ViewchildComponent], imports: [RouterTestingModule]
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
