import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess, retrieveMeetupSuccess,
  startRetrieveMeetup,
  startRetrieveMeetups
} from "../actions/meetups.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class MeetupsEffects {
  retrieveMeetups$ = createEffect(() => this.actions$.pipe(
    ofType(startRetrieveMeetups),
    switchMap(() => {
      return this.http.get<any>('https://backbonebk.inteligencia.co.uk/api/meetups')
        .pipe(map(responseData => {
          return retrieveMeetupsSuccess({meetups: responseData['data']});
        }), catchError((error) => {
          return of(retrieveMeetupsFail({error: error}));
        }))
    })
  ));
  retrieveMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startRetrieveMeetup),
    switchMap((data) => {
      return this.http.get<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${data.meetupId}`)
        .pipe(map(responseData => {
          return retrieveMeetupSuccess({meetup: responseData['data']});
        }), catchError((error) => {
          return of(retrieveMeetupFail({error: error}));
        }))
    })
  ))

  constructor(private actions$: Actions, private http: HttpClient) {
  }

}


