import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  retrieveMeetups() {
    return this.http.get<any>('https://backbonebk.inteligencia.co.uk/api/meetups').pipe(map(responseData => {
      return responseData['data']
    }))
  }

  retrieveMeetup(id: string) {
    return this.http.get<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`)
  }

  createMeetup(postData: { title: string; description: string, address: string, image: string }) {
    console.log(postData)
    return this.http.post('https://backbonebk.inteligencia.co.uk/api/meetups', {data: postData})
  }

  updateMeetup(postData: { title: string; description: string, address: string, image: string }, id: number) {
    return this.http.put<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`, {data: postData},
    )
  }

  deleteMeetup(id: number) {
    return this.http.delete(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`)
  }


}
