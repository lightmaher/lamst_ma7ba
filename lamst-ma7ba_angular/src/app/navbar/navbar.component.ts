import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_Services/Account.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {
    $('.btn').click(function(){
      $(this).toggleClass("click");
      $('.navbar').toggleClass("show");
    });
  }
loggedin(){
  return this.accountservice.loggedin();
}
}
