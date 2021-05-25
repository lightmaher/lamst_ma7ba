import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from '../_Models/Evt';
import { Join } from '../_Models/join';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseurl = 'https://localhost:44367/api/Events/';
  constructor( private http: HttpClient) { }
  getAllEvents(pn: number){
   return this.http.get(this.baseurl + '?pn=' + pn);
  }
  countEvents(){
    return this.http.get(this.baseurl + 'count');
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
  joinevent(join: Join){
    return this.http.post(this.baseurl + 'join' , join);
  }
  joinDelete(id: number){
    return this.http.delete('https://localhost:44367/api/Events/join/' + id);
  }

}
