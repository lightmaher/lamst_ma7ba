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

  events = [];
  constructor(private eventservice: EventService, private accountservice: AccountService, private http: HttpClient) { }

  ngOnInit(): void {
    this.createAdmin();
    this.get_events();
  }
get_events(){
  this.eventservice.getAllEvents().subscribe( (res: []) => {
     this.events = res;
  });
}
loggedin(){
  return this.accountservice.loggedin();
}
createAdmin(){
  return this.http.get('https://localhost:44367/api/Account/createadmin').subscribe(
    res => {console.log('succ'); } , err => {console.log('error'); }
  );
}
}
