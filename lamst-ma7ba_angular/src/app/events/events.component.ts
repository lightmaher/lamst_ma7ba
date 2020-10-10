import { Component, OnInit } from '@angular/core';
import { Evt } from '../_Models/Evt';
import { EventService } from '../_Services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = {};
  constructor(private eventservice: EventService) { }

  ngOnInit(): void {
    this.get_events();
  }
get_events(){
  this.eventservice.getAllEvents().subscribe( res => {
     this.events = res;
  });
}
}
