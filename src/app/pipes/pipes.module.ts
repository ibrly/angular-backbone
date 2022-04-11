import {NgModule} from '@angular/core';
import {PipesComponent} from "./pipes.component";
import {PipePipe} from "./pipe.pipe";
import {SharedModule} from "../shared/shared.module";
import {PipesRoutingModule} from "./pipes-routing.module";


@NgModule({
  declarations: [PipesComponent,
    PipePipe],
  exports: [PipesComponent,
    PipePipe],
  imports: [
    SharedModule,
    PipesRoutingModule
  ]
})
export class PipesModule {
}
