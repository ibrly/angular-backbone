import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForComponent} from './for.component';

describe('ForComponent', () => {
  let component: ForComponent;
  let fixture: ComponentFixture<ForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an array from 1 to 10', function () {
    expect(component.list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should be ten p elements with numbers from 1 to 10', function () {
    const compiled = fixture.nativeElement;
    const pElements = compiled.querySelectorAll('p');
    expect(pElements.length).toEqual(10);

    component.list.forEach((item, index) => {
      expect(pElements[index].textContent).toContain(item)
    });
  });
});
