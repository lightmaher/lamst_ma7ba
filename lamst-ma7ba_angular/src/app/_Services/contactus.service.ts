import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Contactus } from '../_Models/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

constructor( private http: HttpClient) { }
baseurl = environment.baseUrl + 'api/contactus/';

getAllMessages(){
  return this.http.get(this.baseurl);
}
getMessage(id: number){
  return this.http.get(this.baseurl + id);
}
addMessage(message: Contactus){
  return this.http.post(this.baseurl, message);
}
deleteMessage(id: number){
  return this.http.delete(this.baseurl + id);
}
}
