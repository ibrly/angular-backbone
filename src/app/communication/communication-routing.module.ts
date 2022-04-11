import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommunicationComponent} from "../pages/communication/communication.component";

const routes: Routes = [{
  path: '',
  component: CommunicationComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule {
}
