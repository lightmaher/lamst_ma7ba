import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Need } from '../_Models/need';

@Injectable({
    providedIn: 'root'
})

export class NeedService{
    constructor(private http: HttpClient){};
    baseUrl = 'https://localhost:44367/api/Need/';
    GetAllNeeds(): Observable<Need[]>{
        return this.http.get<Need[]>(this.baseUrl + 'GetAllNeeds');
    }
    AddNeed(model: Need){
        return this.http.post(this.baseUrl + 'AddNeed' , model);
    }
    EditNeed(model: Need){
        return this.http.put(this.baseUrl + 'EditNeed' , model);
    }
    GetNeed(id: number): Observable<Need>{
        return this.http.get<Need>(this.baseUrl + 'GetNeed/' + id);
    }
    deleteNeed(id: number){
        return this.http.delete(this.baseUrl + 'DeleteNeed/' + id);
    }
}