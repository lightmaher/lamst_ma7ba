import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evt } from '../_Models/Evt';
import { Place } from '../_Models/place';
import { HomeService } from '../_Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private homeservice: HomeService) { }
  events = [];
  places = [];
  ngOnInit(): void {
    this.getPlaces();
    this.getEvenst();
  }
  getPlaces(){
    this.homeservice.getPlaces().subscribe((res: []) => this.places = res);
  }
  public createImgPath = (server: string) => {
    return `https://localhost:44367/${server}`;
  }
getEvenst(){
  this.homeservice.getEvents().subscribe((res: []) => this.events  = res );
}
}
