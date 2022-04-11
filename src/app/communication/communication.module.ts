import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CEventsBindingComponent} from "./c-events-binding/c-events-binding.component";
import {ChildoComponent} from "./c-events-binding/childo/childo.component";
import {NgContentComponent} from "./ng-content/ng-content.component";
import {ContentchildComponent} from "./ngContent/contentchild/contentchild.component";
import {PropertiesBindingComponent} from "./properties-binding/properties-binding.component";
import {ChildComponent} from "./properties-binding/child/child.component";


@NgModule({
  declarations: [CEventsBindingComponent,
    ChildoComponent,
    NgContentComponent,
    ContentchildComponent,
    PropertiesBindingComponent,
    ChildComponent],
  exports: [CEventsBindingComponent,
    ChildoComponent,
    NgContentComponent,
    ContentchildComponent,
    PropertiesBindingComponent,
    ChildComponent],
  imports: [
    CommonModule
  ]
})
export class CommunicationModule {
}