import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttptestService {

  constructor(private http: HttpClient) {
  }

  //create CRUD
  createMeetup(data: any) {
    return this.http.post<any>('http://localhost:1350/api/meetups', {data: data})
  }

  //read CRUD
  getMeetup() {
    return this.http.get<any>('http://localhost:1350/api/meetups')
  }

  //update CRUD
  updateMeetup(data: any, id: any) {
    return this.http.put<any>(`http://localhost:1350/api/meetups/${id}`, {data: data})
  }

  //delete CRUD
  deleteMeetup(id: any) {
    return this.http.delete<any>(`http://localhost:1350/api/meetups/${id}`)
  }

  //read by id CRUD
  getMeetupById(id: any) {
    return this.http.get<any>(`http://localhost:1350/api/meetups/${id}`)
  }
}
