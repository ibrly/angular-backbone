import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";

const routes: Routes = [{
  path: 'dynamic',
  component: ParentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
