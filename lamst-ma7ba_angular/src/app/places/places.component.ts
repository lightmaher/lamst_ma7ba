import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { PlaceService } from '../_Services/place.service';
import { Place } from '../_Models/place';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{

  places: Place[];
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
