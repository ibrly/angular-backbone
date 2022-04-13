import {NgModule} from '@angular/core';
import {TdComponent} from "./td/td.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {FormsComponent} from "../pages/forms/forms.component";
import {SharedModule} from "../shared/shared.module";
import {FormsRoutingModule} from "./forms-routing.module";


@NgModule({
  declarations: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ],
  exports: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ],
  imports: [
    SharedModule,
    FormsRoutingModule
  ]
})
export class NgFormsModule {
}
