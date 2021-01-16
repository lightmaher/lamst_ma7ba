import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../_Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor( private http: HttpClient) { }
baseurl = 'https://localhost:44367/api/User/';
showusers(){
  return this.http.get(this.baseurl);
}
addUser(user: User){
  return this.http.post(this.baseurl, user);
}
deleteUser(id: number){
 return this.http.delete(this.baseurl + id);
}
showUser(id: number){
  return this.http.get(this.baseurl + id);
}
}
