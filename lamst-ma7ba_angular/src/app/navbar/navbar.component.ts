import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_Services/Account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {
  }
loggedin(){
  return this.accountservice.loggedin();
}
}
