import {ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

import {AsyncTestingComponent} from './async-testing.component';
import {delay, Observable} from "rxjs";

describe('AsyncTestingComponent', () => {
  let component: AsyncTestingComponent;
  let fixture: ComponentFixture<AsyncTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncTestingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show async component after 3 seconds', (done: DoneFn) => {
      expect(component.showAsyncComponent).toBeFalse();
      setTimeout(() => {
        expect(component.showAsyncComponent).toBeTrue();
        done();
      }, 3000);
    }
  );
  it('fake async', fakeAsync(() => {
        let showAsyncComponent = false;
        setTimeout(() => {
          showAsyncComponent = true;
          expect(showAsyncComponent).toBeTrue();
        }, 3000);
        tick(3000);
      }
    )
  );

  it('should resolve', fakeAsync(() => {
      let result: unknown;
      component.asyncFunc().then(res => {
        result = res;
      });
      flush();
      expect(result).toEqual('resolved');
    }));


    it('should emit', fakeAsync(() => {
      let result: string | undefined;
     component.observableFunc().subscribe(res => {
        result = res;
      });
      flush();
      expect(result).toEqual('resolved');
    }));

});
