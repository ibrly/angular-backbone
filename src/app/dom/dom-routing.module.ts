import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DomComponent} from "../pages/dom/dom.component";

const routes: Routes = [{
  path: '',
  component: DomComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomRoutingModule {
}
