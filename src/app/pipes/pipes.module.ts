import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesComponent} from "./pipes.component";
import {PipePipe} from "./pipe.pipe";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [PipesComponent,
    PipePipe],
  exports: [PipesComponent,
    PipePipe],
  imports: [
    SharedModule
  ]
})
export class PipesModule {
}
