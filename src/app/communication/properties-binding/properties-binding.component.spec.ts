import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertiesBindingComponent} from './properties-binding.component';
import {ChildComponent} from "./child/child.component";

describe('PropertiesBindingComponent', () => {
  let component: PropertiesBindingComponent;
  let fixture: ComponentFixture<PropertiesBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesBindingComponent, ChildComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
