import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactus } from 'src/app/_Models/contactus';
import { ContactusService } from 'src/app/_Services/contactus.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( private messageservice: ContactusService , private route: Router) { }
 messages: Contactus;
  ngOnInit(): void {
    this.getMessages();
  }
getMessages(){
  this.messageservice.getAllMessages().subscribe((res: Contactus) => {
    this.messages = res;
  });
}
onDelete(id: number){
this.messageservice.deleteMessage(id).subscribe( res => { window.location.reload(); } , err => {console.log('error'); } );
}
}
