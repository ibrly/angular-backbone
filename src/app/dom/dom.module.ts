import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewchildComponent} from "./viewchild/viewchild.component";
import {AttrDirDirective} from "./attr-dir.directive";
import {DomComponent} from "../pages/dom/dom.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ViewchildComponent,
    AttrDirDirective,
    DomComponent],
  exports: [ViewchildComponent,
    AttrDirDirective,
    DomComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DomModule {
}
