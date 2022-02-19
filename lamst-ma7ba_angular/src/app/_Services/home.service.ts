import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 baseurl = environment.baseUrl + 'api/home/';
constructor(private http: HttpClient) { }
getEvents(){
  return this.http.get(this.baseurl + 'events');
}
getPlaces(){
  return this.http.get(this.baseurl + 'Places');
}

}
