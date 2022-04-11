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

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
  {
    path: 'home',
    loadChildren: () => import('./basics/basics.module').then(m => m.BasicsModule),
    component: HomeComponent
  },
  {
    path: 'communicate',
    loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule),

    component: CommunicationComponent
  },
  {
    path: 'dom/:id',
    component: DomComponent,
    loadChildren: () => import('./dom/dom.module').then(m => m.DomModule),
  },
  {
    path: 'l-c-hooks',
    loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule),
    component: LifecycleHooksComponent
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.NgFormsModule),
    component: FormsComponent
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule),
    component: PipesComponent
  },
  {
    path: 'dynamic',
    component: ParentComponent
    , loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)

  },
  {
    path: 'http',
    loadChildren: () => import('./http/http.module').then(m => m.HttpModule),
    component: HttpComponent
  },
  {
    path: 'http/:id',
    component: RetrieveOneComponent
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
