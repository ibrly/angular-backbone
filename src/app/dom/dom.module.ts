import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewchildComponent} from "./viewchild/viewchild.component";
import {AttrDirDirective} from "./attr-dir.directive";


@NgModule({
  declarations: [ViewchildComponent,
    AttrDirDirective],
  exports: [ViewchildComponent,
    AttrDirDirective],
  imports: [
    CommonModule
  ]
})
export class DomModule {}
