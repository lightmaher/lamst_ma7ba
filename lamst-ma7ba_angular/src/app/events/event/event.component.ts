import { Component, Input, OnInit } from '@angular/core';
import { Evt } from 'src/app/_Models/Evt';
import { EventService } from 'src/app/_Services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor( private eventservice: EventService) { }
 @Input()evt: Evt;
  ngOnInit(): void {
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44367/${serverPath}`;
  }
  delete(id: number){
    this.eventservice.deleteEvent(id).subscribe(res => {
      console.log('eshta');
    }, error => {
      console.log('error');
    });
  }
}
