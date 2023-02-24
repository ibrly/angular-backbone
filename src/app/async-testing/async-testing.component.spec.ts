import {ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

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
  it('asynchronous test example - plain Promise', fakeAsync(() => {
    let test = false;
    console.log('Creating promise');
    const promise = new Promise<void>(resolve => {
      console.log('In promise');
      setTimeout(() => {
        test = true;
        console.log('resolving promise');
        resolve();
      }, 10);
    });
    promise.then(() => console.log('Promise complete'));
    flushMicrotasks()
    tick(10)
    console.log('Promise test');
    expect(test).toBeTrue();
  }));

  it('asynchronous test example - Observable', fakeAsync(() => {
      let test = false;
      console.log('Creating observable');
      const test$ = new Observable<void>(observer => {
        console.log('In observable');
        test = true;
        console.log('Emitting observable');
        observer.next();
        observer.complete();
      }).pipe(delay(10));
      test$.subscribe(() => console.log('Observable complete'));
      tick(10)
      console.log('Observable test');
      expect(test).toBeTrue();
    }
  ));

});
