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

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'communicate',
  component: CommunicationComponent
}, {
  path: 'dom/:id',
  component: DomComponent,
  children: [{
    path: '',
    component: LifecycleHooksComponent
  }]
}, {
  path: 'l-c-hooks',
  component: LifecycleHooksComponent
}, {
  path: 'forms',
  component: FormsComponent
}, {
  path: 'pipes',
  component: PipesComponent
}, {
  path: 'http',
  component: HttpComponent
},
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
