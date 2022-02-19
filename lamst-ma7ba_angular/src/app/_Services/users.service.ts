import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment.prod';
import { User } from '../_Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor( private http: HttpClient) { }
baseurl = environment.baseUrl + 'api/User/';
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
