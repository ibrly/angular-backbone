import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy, AfterViewInit, AfterContentChecked {

  constructor() {
  }


  ngOnInit(): void {
    console.log('ngOnInit');
  }


  ngAfterContentInit() {
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
