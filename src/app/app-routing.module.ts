import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
  {path: 'home', loadChildren: () => import('./basics/basics.module').then(m => m.BasicsModule)},
  {
    path: 'communicate',
    loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)
  },{
    path: 'dom/:id',
    loadChildren: () => import('./dom/dom.module').then(m => m.DomModule)
  },{
    path: 'dynamic',
    loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)
  },{
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.NgFormsModule)
  },{
    path: 'http',
    loadChildren: () => import('./http/http.module').then(m => m.HttpModule)
  },{
    path: 'l-c-hooks',
    loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule)
  },{
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
