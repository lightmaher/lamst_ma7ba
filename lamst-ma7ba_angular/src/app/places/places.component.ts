import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { PlaceService } from '../_Services/place.service';
import { Place } from '../_Models/place';
import { ViewChild } from '@angular/core';
import { AccountService } from '../_Services/Account.service';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{

  places: Place[];
  constructor(private placeS: PlaceService , private accountservice: AccountService) { }


  ngOnInit(): void {
    this.getAllPlaces();
  }
loggedin(){
  return this.accountservice.loggedin();
}

  getAllPlaces(){
    this.placeS.GetAllPlaces().subscribe(list => {
      this.places = list;
    } , err => console.log(err));
  }
}
