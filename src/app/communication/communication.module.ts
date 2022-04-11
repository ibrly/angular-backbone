import {NgModule} from '@angular/core';
import {CEventsBindingComponent} from "./c-events-binding/c-events-binding.component";
import {ChildoComponent} from "./c-events-binding/childo/childo.component";
import {NgContentComponent} from "./ng-content/ng-content.component";
import {ContentchildComponent} from "./ngContent/contentchild/contentchild.component";
import {PropertiesBindingComponent} from "./properties-binding/properties-binding.component";
import {ChildComponent} from "./properties-binding/child/child.component";
import {CommunicationComponent} from "../pages/communication/communication.component";
import {SharedModule} from "../shared/shared.module";
import {CommunicationRoutingModule} from "./communication-routing.module";


@NgModule({
  declarations: [
    CEventsBindingComponent,
    ChildoComponent,
    NgContentComponent,
    ContentchildComponent,
    CommunicationComponent,
    PropertiesBindingComponent,
    ChildComponent
  ],
  exports: [
    CEventsBindingComponent,
    CommunicationComponent,
    ChildoComponent,
    NgContentComponent,
    ContentchildComponent,
    PropertiesBindingComponent,
    ChildComponent],
  imports: [
    SharedModule,
    CommunicationRoutingModule
  ]
})
export class CommunicationModule {
}
