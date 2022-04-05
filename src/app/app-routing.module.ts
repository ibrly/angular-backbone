import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {DomComponent} from "./pages/dom/dom.component";
import {LifecycleHooksComponent} from "./lifecycle-hooks/lifecycle-hooks.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {FormsComponent} from "./pages/forms/forms.component";

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
},
  {
    path: 'not-found',
    component: NotFoundComponent
  }, {
    path: 'forms',
    component: FormsComponent
  },
  {path: '**', redirectTo: 'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
