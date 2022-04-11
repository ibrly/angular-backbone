import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";
import {SharedModule} from "../shared/shared.module";
import {LifecycleHooksRoutingModule} from "./lifecycle-hooks-routing.module";


@NgModule({
  declarations: [LifecycleHooksComponent],
  exports: [LifecycleHooksComponent,
    LifecycleHooksRoutingModule],
  imports: [
    SharedModule
  ]
})
export class LifecycleHooksModule {
}
