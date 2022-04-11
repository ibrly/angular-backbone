import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TdComponent} from "./td/td.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsComponent} from "../pages/forms/forms.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ], exports: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ],
  imports: [
    SharedModule,
    ]
})
export class NgFormsModule {
}
