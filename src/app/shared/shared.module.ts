import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [NavComponent,
    NotFoundComponent],
  exports: [NavComponent,
    NotFoundComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
