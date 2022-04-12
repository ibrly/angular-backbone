import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HttpClientModule} from "@angular/common/http";

import {SharedModule} from "./shared/shared.module";
import {MeetupsComponent} from './meetups/meetups.component';
import {reducer} from "./store/reducers/meetup/meetups.reducer";
import {MeetupsEffects} from "./store/reducers/meetup/effects/meetups.effects";

@NgModule({
  declarations: [
    AppComponent,
    MeetupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({meetups: reducer}, {}),
    EffectsModule.forRoot([MeetupsEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
