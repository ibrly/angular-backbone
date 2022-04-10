import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentComponent} from './basics/components/component/component.component';
import {InlineComponentComponent} from './basics/components/inline-component/inline-component.component';
import {DataBindingComponent} from './basics/data-binding/data-binding.component';
import {EventBindingComponent} from './basics/event-binding/event-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IfComponent} from './basics/directives/if/if.component';
import {ForComponent} from './basics/directives/for/for.component';
import {StyleComponent} from './basics/directives/style/style.component';
import {ClassComponent} from './basics/directives/class/class.component';
import {HomeComponent} from './pages/home/home.component';
import {PropertiesBindingComponent} from './communication/properties-binding/properties-binding.component';
import {ChildComponent} from './communication/properties-binding/child/child.component';
import {CEventsBindingComponent} from './communication/c-events-binding/c-events-binding.component';
import {ChildoComponent} from './communication/c-events-binding/childo/childo.component';
import {ViewchildComponent} from './dom/viewchild/viewchild.component';
import {NgContentComponent} from './communication/ng-content/ng-content.component';
import {ContentchildComponent} from './communication/ngContent/contentchild/contentchild.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {AttrDirDirective} from './dom/attr-dir.directive';
import {SwitchComponent} from './basics/directives/switch/switch.component';
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
import { PlaceholderDirective } from './dynamic/placeholder.directive';
import { ModalComponent } from './dynamic/modal/modal.component';
import { ParentComponent } from './dynamic/parent/parent.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    InlineComponentComponent,
    DataBindingComponent,
    EventBindingComponent,
    IfComponent,
    ForComponent,
    StyleComponent,
    ClassComponent,
    HomeComponent,
    PropertiesBindingComponent,
    ChildComponent,
    CEventsBindingComponent,
    ChildoComponent,
    ViewchildComponent,
    NgContentComponent,
    ContentchildComponent,
    LifecycleHooksComponent,
    AttrDirDirective,
    SwitchComponent,
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
    FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
