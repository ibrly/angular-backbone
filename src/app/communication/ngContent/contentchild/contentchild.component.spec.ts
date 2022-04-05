import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildComponent } from './contentchild.component';

describe('ContentchildComponent', () => {
  let component: ContentchildComponent;
  let fixture: ComponentFixture<ContentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
