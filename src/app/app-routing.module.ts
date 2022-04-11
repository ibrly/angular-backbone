import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {DomComponent} from "./pages/dom/dom.component";
import {LifecycleHooksComponent} from "./lifecycle-hooks/lifecycle-hooks.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {FormsComponent} from "./pages/forms/forms.component";
import {PipesComponent} from "./pipes/pipes.component";
import {HttpComponent} from "./http/http.component";
import {RetrieveOneComponent} from "./http/retrieve-one/retrieve-one.component";
import {ParentComponent} from "./dynamic/parent/parent.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
