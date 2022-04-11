import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './pages/home/home.component';
import {CommunicationComponent} from './pages/communication/communication.component';
import {NavComponent} from './shared/nav/nav.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HttpClientModule} from "@angular/common/http";
import {BasicsModule} from "./basics/basics.module";
import {CommunicationModule} from "./communication/communication.module";
import {DomModule} from "./dom/dom.module";
import {DynamicModule} from "./dynamic/dynamic.module";
import {HttpModule} from "./http/http.module";
import {LifecycleHooksModule} from "./lifecycle-hooks/lifecycle-hooks.module";
import {PipesModule} from "./pipes/pipes.module";
import {NgFormsModule} from "./forms/forms.module";
import {SharedModule} from "./shared/shared.module";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    BasicsModule,
    CommunicationModule,
    DomModule,
    DynamicModule,
    HttpModule,
    LifecycleHooksModule,
    PipesModule,
    NgFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
