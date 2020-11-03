import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor( private http: HttpClient ) { }
baseurl = 'https://localhost:44367/api/Account/';
jwtHelper = new JwtHelperService();
decotedToken: string;
login(mod){
  return this.http.post(this.baseurl, mod).pipe(
    map((Response: any) => {
     const user = Response;
     if (user) {
       localStorage.setItem('token', user.token);
       this.decotedToken = this.jwtHelper.decodeToken(user.token);
       console.log(this.decotedToken);
     }
    })
  );
}
logout(){
  localStorage.removeItem('token');
}
loggedin(){
const token = localStorage.getItem('token');
return !! token;
}
}
