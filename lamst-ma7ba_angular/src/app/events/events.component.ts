import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_Services/Account.service';
import { EventService } from '../_Services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  p = 1;
  count = 1;
  events = [];
  constructor(private eventservice: EventService, private accountservice: AccountService, private http: HttpClient) { }

  ngOnInit(): void {
    this.eventservice.countEvents().subscribe( (res: number) => {
      this.count = res;
    });
    this.get_events();
  }
get_events(){
  this.eventservice.getAllEvents(this.p).subscribe( (res: []) => {
     this.events = res;
  });
}
loggedin(){
  return this.accountservice.loggedin();
}
update_page(pn: number){
 this.p = pn;
 this.get_events();
}

}
