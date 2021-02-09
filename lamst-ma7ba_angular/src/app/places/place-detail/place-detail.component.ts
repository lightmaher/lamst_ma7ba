import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../../_Services/place.service';
import { Place } from '../../_Models/place';
import { EventService } from 'src/app/_Services/event.service';
import { Evt } from 'src/app/_Models/Evt';
import { AccountService } from 'src/app/_Services/Account.service';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place: Place;
  evet: Evt[];
  evt: Evt;
  nid: number;
  fevet: Evt[];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: true
  };
  public barChartLabels = ['2006' , '2007' , '2008' , '2009' , '2010'];
  barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65 , 66 , 98 , 88 , 99] , label: 'Seria A'},
    {data: [44 , 55 , 66 , 77], label: 'Seria B'}
  ];

  constructor(private placeS: PlaceService ,
              private activeRoute: ActivatedRoute ,
              private eventsservice: EventService,
              private accountservice: AccountService,
              private route: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    const id = +this.activeRoute.snapshot.params['id'];
    this.placeS.GetPlace(id).subscribe(x => {
      this.place = x;
      console.log(this.place.placeGalleries);
    } , err => console.log(err));
    this.showevents();

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
  showevents(){
    this.eventsservice.getAllEvents().subscribe(
      (events: Evt[]) => {this.evet = events;
                          this.nid = this.place.placeId;
                          this.fevet = (this.nid) ?
        this.evet.filter(p => p.location.placeId === this.nid) : this.evet;
      }
    );
    }
    loggedin(){
      return this.accountservice.loggedin();
    }
}
