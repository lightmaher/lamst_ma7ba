import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_Models/User';
import { AlretifyService } from 'src/app/_Services/alertify.service';
import { UsersService } from 'src/app/_Services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder, private userservice: UsersService, private alertify: AlretifyService) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.userForm = this.fb.group({
    firstName: ['', Validators.required],
    secoundName: ['', Validators.required],
    email: [ '', Validators.required],
    job: [ '', Validators.required],
    phoneNumber: [ '', Validators.required],
    reason: ['', Validators.required],
    comment: ['', Validators.required]
    });
  }
adduser(){
  this.user = Object.assign({}, this.userForm.value);
   // tslint:disable-next-line:align
   this.userservice.addUser(this.user).subscribe(
    res => {this.alertify.success_user(); },
    err => {console.log('error'); }
  );
}
}
