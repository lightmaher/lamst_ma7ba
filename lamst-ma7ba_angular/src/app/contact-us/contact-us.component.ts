import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contactus } from '../_Models/contactus';
import { ContactusService } from '../_Services/contactus.service';
import { AlretifyService } from '../_Services/alertify.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactusservice: ContactusService, private alertify: AlretifyService) { }
 contactusForm: FormGroup;
 message: Contactus;
  ngOnInit(): void {
    this.messageForm();
  }
messageForm(){
  this.contactusForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    message: ['', Validators.required]
  });
}

addMessage(){
this.message = Object.assign({}, this.contactusForm.value);
this.contactusservice.addMessage(this.message).subscribe( res => {
  this.alertify.success('worked');
}, err => {this.alertify.error('هناك خطاء فى رقم الهاتف او الاسم '); }
);
}
}
