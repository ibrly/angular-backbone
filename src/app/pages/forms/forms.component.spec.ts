import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsComponent} from './forms.component';
import {TdComponent} from "../../forms/td/td.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveComponent} from "../../forms/reactive/reactive.component";

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponent, TdComponent, ReactiveComponent], imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
