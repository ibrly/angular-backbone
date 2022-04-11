import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TdComponent} from "./td/td.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsComponent} from "../pages/forms/forms.component";


@NgModule({
  declarations: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ], exports: [TdComponent,
    ReactiveComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NgFormsModule {
}
