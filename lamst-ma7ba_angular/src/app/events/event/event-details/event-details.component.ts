import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evt } from 'src/app/_Models/Evt';
import { EventService } from 'src/app/_Services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: number;
  evet: any;
  constructor(private event: EventService, private routes: ActivatedRoute) { }
  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.id = this.routes.snapshot.params['id'];
    this.eventdetail();
  }
eventdetail(){
this.event.getEvent(this.id).subscribe(
  res => {this.evet = res; }
);
}
public createImgPath = (server: string) => {
  return `https://localhost:44367/${server}`;
}


}
