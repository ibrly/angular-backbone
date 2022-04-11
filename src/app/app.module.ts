import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './pages/home/home.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {CommunicationComponent} from './pages/communication/communication.component';
import {DomComponent} from './pages/dom/dom.component';
import {NavComponent} from './shared/nav/nav.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {TdComponent} from './forms/td/td.component';
import {ReactiveComponent} from './forms/reactive/reactive.component';
import {FormsComponent} from './pages/forms/forms.component';
import {PipesComponent} from './pipes/pipes.component';
import {PipePipe} from './pipes/pipe.pipe';
import {HttpComponent} from './http/http.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateComponent} from './http/create/create.component';
import {RetrieveComponent} from './http/retrieve/retrieve.component';
import {RetrieveOneComponent} from './http/retrieve-one/retrieve-one.component';
import {PlaceholderDirective} from './dynamic/placeholder.directive';
import {ModalComponent} from './dynamic/modal/modal.component';
import {ParentComponent} from './dynamic/parent/parent.component';
import {BasicsModule} from "./basics/basics.module";
import {CommunicationModule} from "./communication/communication.module";
import {DomModule} from "./dom/dom.module";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifecycleHooksComponent,
    CommunicationComponent,
    DomComponent,
    NavComponent,
    NotFoundComponent,
    TdComponent,
    ReactiveComponent,
    FormsComponent,
    PipesComponent,
    PipePipe,
    HttpComponent,
    CreateComponent,
    RetrieveComponent,
    RetrieveOneComponent,
    PlaceholderDirective,
    ModalComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    BasicsModule,
    CommunicationModule,
    DomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
