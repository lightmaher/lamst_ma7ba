import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Imagecat } from '../_Models/imagecat';

@Injectable({
  providedIn: 'root'
})
export class ImagecatService {
baseurl = environment.baseUrl + 'api/imagecat/';
constructor( private http: HttpClient) { }

getimagescat(){
  return this.http.get(this.baseurl);
}
getimagecat( id: number){
  return this.http.get(this.baseurl);
}
addimagecat(imagecat: Imagecat){
  return this.http.post(this.baseurl , imagecat);
}
deleteimagecat(id: number){
  return this.http.delete(this.baseurl + id);
}


}
