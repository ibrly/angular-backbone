import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [LifecycleHooksComponent],
  exports: [LifecycleHooksComponent],
  imports: [
    SharedModule
  ]
})
export class LifecycleHooksModule {
}
