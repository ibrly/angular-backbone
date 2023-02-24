import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpComponent} from './http.component';
import {CreateComponent} from "./create/create.component";
import {RetrieveComponent} from "./retrieve/retrieve.component";
import {provideMockStore} from "@ngrx/store/testing";
import {FormsModule} from "@angular/forms";

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpComponent, CreateComponent, RetrieveComponent],
      providers: [provideMockStore()],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
