import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataBindingComponent} from './data-binding.component';
import {FormsModule} from "@angular/forms";

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DataBindingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a name', () => {
    expect(component.name).toBe('John');
  })

  it('should when called return a name', () => {
    expect(component.getName()).toBe('John');
  })
  it('should display id in the dom', function () {
    const compiled = fixture.nativeElement;
    expect(component.id).toBe(1);
    expect(compiled.querySelector('p').textContent).toContain('1');
  });
  it('should display name in the dom', function () {
    const compiled = fixture.nativeElement;
    expect(component.name).toBe('John');
    expect(compiled.querySelector('p').textContent).toContain('John');
  })
  it('should display getName function is called and return John value and view it in the dom', function () {
    const compiled = fixture.nativeElement;
    expect(component.getName()).toBe('John');
    expect(compiled.querySelector('p').textContent).toContain('John');
  })
  it('should keep input and p in sync', function () {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    input.value = 'Jeo';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Jeo');
    expect(component.name).toBe('Jeo');
  })
  it('should have a class of name variable value', function () {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').classList).toContain('John');
  })

});
