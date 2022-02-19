import { Component, OnInit } from '@angular/core';
import { Evt } from '../_Models/Evt';
import { EventService } from '../_Services/event.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {

  constructor(private eventsservice: EventService) { }
  events: Evt[];
  ngOnInit(): void {
    this.showlastevents();
  }
  showlastevents(){
    this.eventsservice.getAllEvents(1).subscribe( (res: Evt[]) => {
         this.events = res;
         this.events.splice(3, 2);
         console.log(this.events);
    });
  }
}
