import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesComponent} from "./pipes.component";
import {PipePipe} from "./pipe.pipe";


@NgModule({
  declarations: [PipesComponent,
    PipePipe],
  exports: [PipesComponent,
    PipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
