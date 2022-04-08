import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  retrieveMeetup(id: string | null) {
    return this.http.get<any>(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`)
  }

  createMeetup(postData: { title: string; description: string, address: string, image: string }) {
    console.log(postData)
    return this.http.post('https://backbonebk.inteligencia.co.uk/api/meetups', {data: postData})
  }

  UpdateMeetup(postData: { title: string; description: string, address: string, image: string }, id: number) {
    return this.http.put(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`, {data: postData})
  }

  deleteMeetup(id: number) {
    return this.http.delete(`https://backbonebk.inteligencia.co.uk/api/meetups/${id}`)
  }


}
