import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpComponent} from "./http.component";
import {RetrieveOneComponent} from "./retrieve-one/retrieve-one.component";

const routes: Routes = [{
  path: 'http',
  component: HttpComponent
},
  {
    path: 'http/:id',
    component: RetrieveOneComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule {
}
