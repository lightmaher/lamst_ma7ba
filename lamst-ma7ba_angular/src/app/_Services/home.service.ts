import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 baseurl = 'https://localhost:44367/api/home/';
constructor(private http: HttpClient) { }
getEvents(){
  return this.http.get(this.baseurl + 'events');
}
getPlaces(){
  return this.http.get(this.baseurl + 'Places');
}

}
