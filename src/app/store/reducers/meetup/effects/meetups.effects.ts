import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {retrieveMeetups} from "../actions/meetups.actions";
import {map, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class MeetupsEffects {
  retrieveMeetups$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveMeetups),
    switchMap(() => {
      return this.http.get<any>('https://backbonebk.inteligencia.co.uk/api/meetups').pipe(map(responseData => {
        return responseData['data']
      }))
    })
  ))

  constructor(private actions$: Actions, private http: HttpClient) {
  }

}


