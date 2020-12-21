import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contactus } from '../_Models/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

constructor( private http: HttpClient) { }
baseurl = 'https://localhost:44367/api/contactus/';

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
