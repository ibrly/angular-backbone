import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createMeetupFail,
  deleteMeetupFail,
  retrieveMeetupFail,
  retrieveMeetupsFail,
  retrieveMeetupsSuccess,
  retrieveMeetupSuccess,
  startCreateMeetup,
  startDeleteMeetup,
  startRetrieveMeetup,
  startRetrieveMeetups,
  startUpdateMeetup,
  toMeetupsError,
  updateMeetupFail,
  updateMeetupSuccess
} from "./meetups.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Injectable()
export class MeetupsEffects {
  retrieveMeetups$ = createEffect(() => this.actions$.pipe(
    ofType(startRetrieveMeetups),
    switchMap(() => {
      return this.http.get<any>(`${environment.apiUrl}/meetups`)
        .pipe(map(responseData => {
          return retrieveMeetupsSuccess({meetups: responseData['data']});
        }), catchError((error) => {
          return of(retrieveMeetupsFail({error: toMeetupsError(error)}));
        }))
    })
  ));
  retrieveMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startRetrieveMeetup),
    switchMap((data) => {
      return this.http.get<any>(`${environment.apiUrl}/meetups/${data.meetupId}`)
        .pipe(map(responseData => {
          return retrieveMeetupSuccess({meetup: responseData['data']});
        }), catchError((error) => {
          return of(retrieveMeetupFail({error: toMeetupsError(error)}));
        }))
    })
  ));
  createMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startCreateMeetup),
    switchMap((data) => {
      return this.http.post<any>(`${environment.apiUrl}/meetups/`, {data: data.meetup})
        .pipe(
          // Reload the list only once the create succeeded; a failed POST must reach the store.
          switchMap(() => {
            return this.http.get<any>(`${environment.apiUrl}/meetups`)
              .pipe(map(responseData => {
                return retrieveMeetupsSuccess({meetups: responseData['data']});
              }), catchError((error) => {
                return of(retrieveMeetupsFail({error: toMeetupsError(error)}));
              }))
          }),
          catchError((error) => {
            return of(createMeetupFail({error: toMeetupsError(error)}));
          }))
    })
  ));
  updateMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startUpdateMeetup),
    switchMap((data) => {
      return this.http.put<any>(`${environment.apiUrl}/meetups/${data.meetup.id}`, {data: data.meetup.attributes})
        .pipe(map(responseData => {
            return updateMeetupSuccess({meetup: responseData['data']});
          }),
          catchError((error) => {
            return of(updateMeetupFail({error: toMeetupsError(error)}));
          }))
    })
  ));
  deleteMeetup$ = createEffect(() => this.actions$.pipe(
    ofType(startDeleteMeetup),
    switchMap((data) => {
      return this.http.delete<any>(`${environment.apiUrl}/meetups/${data.meetupId}`)
        .pipe(
          // Same as create: reload after a successful delete, and let a failed DELETE reach the store.
          switchMap(() => {
            return this.http.get<any>(`${environment.apiUrl}/meetups`)
              .pipe(map(responseData => {
                return retrieveMeetupsSuccess({meetups: responseData['data']});
              }), catchError((error) => {
                return of(retrieveMeetupsFail({error: toMeetupsError(error)}));
              }))
          }),
          catchError((error) => {
            return of(deleteMeetupFail({error: toMeetupsError(error)}));
          }))
    })
  ));

  constructor(private actions$: Actions, private http: HttpClient) {
  }

}


