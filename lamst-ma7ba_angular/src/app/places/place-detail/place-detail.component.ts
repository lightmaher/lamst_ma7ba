import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../../_Services/place.service';
import { Place } from '../../_Models/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place: Place;
  constructor(private placeS: PlaceService ,
              private activeRoute: ActivatedRoute ,
              private route: Router) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params.placeId;
    this.placeS.GetPlace(id).subscribe(x => {
      this.place = x;
    } , err => console.log(err));
  }

  public createImgPath = (server: string) => {
    return `https://localhost:44367/${server}`;
  }

  EditPlaceClick(id){
    this.route.navigate(['/edit-place' , id]);
  }
  ondelete(id: number){

    const alert = confirm('Do you delete this Product?');
    if (alert === true){
      this.placeS.deletePlace(id).subscribe(r => {
        this.route.navigate(['/places']);
      } , err => console.log(err));
    }
  }
}
