import { Component, Input, OnInit } from '@angular/core';
import { PlaceService } from '../../_Services/place.service';
import { Place } from '../../_Models/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place;
  constructor(private placeS: PlaceService) { }

  ngOnInit(): void {
  }

  public createImgPath = (server: string) => {
    return `https://localhost:44367/${server}`;
  }


}
