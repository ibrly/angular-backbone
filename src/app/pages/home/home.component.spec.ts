import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ClassComponent} from "../../basics/directives/class/class.component";
import {ComponentComponent} from "../../basics/components/component/component.component";
import {InlineComponentComponent} from "../../basics/components/inline-component/inline-component.component";
import {DataBindingComponent} from "../../basics/data-binding/data-binding.component";
import {IfComponent} from "../../basics/directives/if/if.component";
import {ForComponent} from "../../basics/directives/for/for.component";
import {StyleComponent} from "../../basics/directives/style/style.component";
import {SwitchComponent} from "../../basics/directives/switch/switch.component";
import {MatGridListModule} from "@angular/material/grid-list";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ClassComponent, ComponentComponent, InlineComponentComponent, DataBindingComponent, IfComponent, ForComponent, ClassComponent, StyleComponent, SwitchComponent],
      imports: [MatGridListModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
