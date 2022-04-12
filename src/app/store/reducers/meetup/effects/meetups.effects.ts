import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createMeetupFail, deleteMeetupFail,
  deleteMeetupSuccess,
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess, retrieveMeetupSuccess, startCreateMeetup, startDeleteMeetup,
  startRetrieveMeetup,
  startRetrieveMeetups, startUpdateMeetup, updateMeetupFail, updateMeetupSuccess
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
  ));
  createMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startCreateMeetup),
    switchMap((data) => {
      return this.http.post<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/`, {data: data.meetup})
        .pipe(map(responseData => {
            return deleteMeetupSuccess({meetups: responseData['data']});
          }),
          catchError((error) => {
            return of(retrieveMeetupFail({error: error}));
          }),
          switchMap(() => {
            return this.http.get<any>('https://backbonebk.inteligencia.co.uk/api/meetups')
              .pipe(map(responseData => {
                return retrieveMeetupsSuccess({meetups: responseData['data']});
              }), catchError((error) => {
                return of(createMeetupFail({error: error}));
              }))
          }))
    })
  ));
  updateMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startUpdateMeetup),
    switchMap((data) => {
      return this.http.put<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${data.meetupId}`, {data: data.meetup})
        .pipe(map(responseData => {
            return updateMeetupSuccess({meetup: responseData['data']});
          }),
          catchError((error) => {
            return of(updateMeetupFail({error: error}));
          }))
    })
  ));
  deleteMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startDeleteMeetup),
    switchMap((data) => {
      return this.http.delete<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${data.meetupId}`)
        .pipe(map(responseData => {
          return deleteMeetupSuccess({meetups: responseData['data']});
        }), catchError((error) => {
          return of(deleteMeetupFail({error: error}));
        }), switchMap(() => {
          return this.http.get<any>('https://backbonebk.inteligencia.co.uk/api/meetups')
            .pipe(map(responseData => {
              return retrieveMeetupsSuccess({meetups: responseData['data']});
            }), catchError((error) => {
              return of(retrieveMeetupsFail({error: error}));
            }))
        }))
    })
  ));

  constructor(private actions$: Actions, private http: HttpClient) {
  }

}


