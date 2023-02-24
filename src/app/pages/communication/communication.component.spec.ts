import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommunicationComponent} from './communication.component';
import {CEventsBindingComponent} from "../../communication/c-events-binding/c-events-binding.component";
import {PropertiesBindingComponent} from "../../communication/properties-binding/properties-binding.component";

describe('CommunicationComponent', () => {
  let component: CommunicationComponent;
  let fixture: ComponentFixture<CommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunicationComponent, CEventsBindingComponent, PropertiesBindingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
