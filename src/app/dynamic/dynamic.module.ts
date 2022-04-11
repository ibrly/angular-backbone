import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceholderDirective} from "./placeholder.directive";
import {ModalComponent} from "./modal/modal.component";
import {ParentComponent} from "./parent/parent.component";
import {SharedModule} from "../shared/shared.module";
import {DynamicRoutingModule} from "./dynamic-routing.module";


@NgModule({
  declarations: [PlaceholderDirective,
    ModalComponent,
    ParentComponent],
  exports: [PlaceholderDirective,
    ModalComponent,
    ParentComponent],
  imports: [
    SharedModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule {
}
