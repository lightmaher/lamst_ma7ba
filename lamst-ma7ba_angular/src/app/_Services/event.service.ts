import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from '../_Models/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseurl = 'https://localhost:44367/api/Events/';
  constructor( private http: HttpClient) { }
  getAllEvents(){
   return this.http.get(this.baseurl);
  }
  getEvent(id: number){
    return this.http.get(this.baseurl + id);
  }
  addEvent(evt: Evt){
    return this.http.post(this.baseurl, evt);
  }
  deleteEvent(id: number){
    return this.http.delete(this.baseurl + id);
  }
}
