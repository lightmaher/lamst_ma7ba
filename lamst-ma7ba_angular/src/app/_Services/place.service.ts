import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../_Models/place';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class PlaceService{
    constructor(private http: HttpClient){}

    baseUrl = environment.baseUrl + 'api/place/';
    GetAllPlaces(): Observable<Place[]>{
        return this.http.get<Place[]>(this.baseUrl + 'GetAllPlaces');
    }
    GetPlace(id: number): Observable<Place>{
        return this.http.get<Place>(this.baseUrl + 'GetPlace/' + id);
    }
    addPlace(model: Place){
        return this.http.post(this.baseUrl + 'AddPlace' , model);
    }
    updatePlace(model: Place){
        return this.http.put(this.baseUrl + 'EditPlace' , model);
    }
    deletePlace(id: number){
        return this.http.delete(this.baseUrl + 'Delete/' + id);
    }
}
