import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";


@NgModule({
  declarations: [LifecycleHooksComponent],
  exports: [LifecycleHooksComponent],
  imports: [
    CommonModule
  ]
})
export class LifecycleHooksModule {
}
