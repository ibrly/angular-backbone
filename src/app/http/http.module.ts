import {NgModule} from '@angular/core';
import {HttpComponent} from "./http.component";
import {CreateComponent} from "./create/create.component";
import {RetrieveComponent} from "./retrieve/retrieve.component";
import {RetrieveOneComponent} from "./retrieve-one/retrieve-one.component";
import {SharedModule} from "../shared/shared.module";
import {HttpRoutingModule} from "./http-routing.module";


@NgModule({
  declarations: [HttpComponent,
    CreateComponent,
    RetrieveComponent,
    RetrieveOneComponent,
  ], exports: [
    HttpComponent,
    CreateComponent,
    RetrieveComponent,
    RetrieveOneComponent,
  ],
  imports: [
    SharedModule,
    HttpRoutingModule
  ]
})
export class HttpModule {
}
