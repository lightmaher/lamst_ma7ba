import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {Image} from '../_Models/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
baseurl = environment.baseUrl + 'api/Image/';
  constructor(private http: HttpClient) { }
  showimages( catid: number , pn: number){
    return this.http.get(this.baseurl + '?catid=' + catid + '&pn=' + pn );
  }
  addImage( image: Image){
    return this.http.post(this.baseurl, image);
  }
  deleteImage( id){
    return this.http.delete(this.baseurl + id);
  }
  countImages(catid: number){
    return this.http.get(this.baseurl + 'count?catid=' + catid );
  }
}
