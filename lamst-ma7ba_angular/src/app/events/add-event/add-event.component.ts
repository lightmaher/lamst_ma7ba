import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evt } from 'src/app/_Models/Evt';
import { Place } from 'src/app/_Models/place';
import { EventService } from 'src/app/_Services/event.service';
import { PlaceService } from 'src/app/_Services/place.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private fb: FormBuilder , private eventservice: EventService , private rout: Router, private placeservice: PlaceService) { }
 addForm: FormGroup;
 public response: {url: ''};
 event: Evt;
 places: Place[];
  ngOnInit( ): void {
    this.placeservice.GetAllPlaces().subscribe(
      res => { this.places = res; }
    );
    this.formbuild();
  }
  formbuild(){
    this.addForm = this.fb.group (
     {
      title : ['', Validators.required],
      description : ['', Validators.required],
      placeId : ['', Validators.required],
      number: ['', Validators.required],
      needs: ['', Validators.required],
      date: ['', Validators.required]
     }
    );
  }
   uploadFinished = (event) => {
    this.response = event;
  }
 add(){
  this.event = Object.assign({}, this.addForm.value);
  this.event.url = this.response.url;
  this.eventservice.addEvent(this.event).subscribe(
    res => {  this.rout.navigate(['/events']); } , error => {
      console.log('error');
    }
  );
 }
}
