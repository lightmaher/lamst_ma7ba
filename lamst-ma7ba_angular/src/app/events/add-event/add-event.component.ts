import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Evt } from 'src/app/_Models/Evt';
import { EventService } from 'src/app/_Services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private fb: FormBuilder , private eventservice: EventService) { }
 addForm: FormGroup;
 public response: {url: ''};
 event: Evt;
  ngOnInit( ): void {
    this.formbuild();
  }
  formbuild(){
    this.addForm = this.fb.group (
     {
      title : ['', Validators.required],
      description : ['', Validators.required],
      location : ['', Validators.required]
     }
    );
  }
   uploadFinished = (event) => {
    this.response = event;
  }
 add(){
  this.event = Object.assign({}, this.addForm.value);
  this.event.url = this.response.url;
  console.log(this.event);
  this.eventservice.addEvent(this.event).subscribe(
    res => { console.log('eshta'); } , error => {
      console.log('error');
    }
  );
 }
}
