import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewchildComponent} from "./viewchild/viewchild.component";
import {AttrDirDirective} from "./attr-dir.directive";
import {DomComponent} from "../pages/dom/dom.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {DomRoutingModule} from "./dom-routing.module";


@NgModule({
  declarations: [ViewchildComponent,
    AttrDirDirective,
    DomComponent],
  exports: [ViewchildComponent,
    AttrDirDirective,
    DomComponent,
  ],
  imports: [
    SharedModule,
    DomRoutingModule
  ]
})
export class DomModule {
}
