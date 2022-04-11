import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceholderDirective} from "./placeholder.directive";
import {ModalComponent} from "./modal/modal.component";
import {ParentComponent} from "./parent/parent.component";


@NgModule({
  declarations: [PlaceholderDirective,
    ModalComponent,
    ParentComponent],
  exports: [PlaceholderDirective,
    ModalComponent,
    ParentComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicModule {
}
