import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './basics/components/component/component.component';
import { InlineComponentComponent } from './basics/components/inline-component/inline-component.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { EventBindingComponent } from './basics/event-binding/event-binding.component';
import {FormsModule} from "@angular/forms";
import { IfComponent } from './basics/directives/if/if.component';
import { ForComponent } from './basics/directives/for/for.component';
import { StyleComponent } from './basics/directives/style/style.component';
import { ClassComponent } from './basics/directives/class/class.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesBindingComponent } from './communication/properties-binding/properties-binding.component';
import { ChildComponent } from './communication/properties-binding/child/child.component';
import { CEventsBindingComponent } from './communication/c-events-binding/c-events-binding.component';
import { ChildoComponent } from './communication/c-events-binding/childo/childo.component';

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
    ChildoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
