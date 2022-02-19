import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evt } from 'src/app/_Models/Evt';
import { Join } from 'src/app/_Models/join';
import { AccountService } from 'src/app/_Services/Account.service';
import { EventService } from 'src/app/_Services/event.service';
import * as alertify from 'alertifyjs';
import { AlretifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
joinform: FormGroup;
  jQuery: any;
  // tslint:disable-next-line:max-line-length
  constructor( private eventservice: EventService, private accountservice: AccountService, private fb: FormBuilder, private alret: AlretifyService, private route: Router ) { }
 @Input()evt: Evt;
    join: Join;
    form = false;
  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.joinform = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }
  joinEvent(){
    this.join = Object.assign({}, this.joinform.value);
    this.join.eventId = this.evt.id;
    this.eventservice.joinevent(this.join).subscribe(
      res => { this.alret.succ('شكرا لك ,سنتواصل معك لتاكيد الحضور');
    }
    );
  }
  showform(){
    this.form = true;
  }
  public createImgPath = (serverPath: string) => {
    return `http://heart.somee.com/${serverPath}`;
  }
  delete(id: number){
    this.eventservice.deleteEvent(id).subscribe(res => {
      window.location.reload();

    }, error => {
      console.log('error');
    });
  }
  loggedin(){
    return this.accountservice.loggedin();
  }
  joinrule(){
    if ( this.evt.addetTime.getTime() >= Date.now() ) {
     }
    return false;
  }
}
