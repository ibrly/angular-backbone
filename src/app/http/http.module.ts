import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpComponent} from "./http.component";
import {CreateComponent} from "./create/create.component";
import {RetrieveComponent} from "./retrieve/retrieve.component";
import {RetrieveOneComponent} from "./retrieve-one/retrieve-one.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


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
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HttpModule {
}
