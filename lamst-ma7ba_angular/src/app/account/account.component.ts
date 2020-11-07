import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { AccountService } from '../_Services/Account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private fb: FormBuilder , private accountservice: AccountService , private route: Router ) { }
 loginForm: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
createForm(){
 this.loginForm = this.fb.group(
   {
     // tslint:disable-next-line:no-unused-expression
     userName: ['', Validators.required],
     password: ['' , Validators.required]

   }
 );
  }
  login(){
    this.accountservice.login(this.loginForm.value).subscribe(
      res => { this.route.navigateByUrl('/');
    }, error => {
      console.log('error');
    }
    );
  }
  loggedin(){
   return this.accountservice.loggedin();
  }
  logout(){
    this.accountservice.logout();
  }
}
