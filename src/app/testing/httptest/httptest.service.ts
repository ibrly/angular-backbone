import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttptestService {

  constructor(private http: HttpClient) {
  }

  //create CRUD
  createMeetup(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/meetups`, {data: data})
  }

  //read CRUD
  getMeetup() {
    return this.http.get<any>(`${environment.apiUrl}/meetups`)
  }

  //update CRUD
  updateMeetup(data: any, id: any) {
    return this.http.put<any>(`${environment.apiUrl}/meetups/${id}`, {data: data})
  }

  //delete CRUD
  deleteMeetup(id: any) {
    return this.http.delete<any>(`${environment.apiUrl}/meetups/${id}`)
  }

  //read by id CRUD
  getMeetupById(id: any) {
    return this.http.get<any>(`${environment.apiUrl}/meetups/${id}`)
  }
}
