import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../_Services/place.service';
import { Place } from '../_Models/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];
  constructor(private placeS: PlaceService) { }

  ngOnInit(): void {
    this.getAllPlaces();
  }


  getAllPlaces(){
    this.placeS.GetAllPlaces().subscribe(list => {
      this.places = list;
    } , err => console.log(err));
  }
}
