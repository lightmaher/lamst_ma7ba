import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NeedService } from '../_Services/need.service';
import { Need } from '../_Models/need';
import { AccountService } from '../_Services/Account.service';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {

  needs: any[];
  constructor(private http: HttpClient,
              private accountservice: AccountService,
    // tslint:disable-next-line:align
    private neddService: NeedService) { }
    panelOpenState = false;
  ngOnInit(): void {
    this.getNeeds();
  }

  getNeeds(){
    this.neddService.GetAllNeeds().subscribe(list => {
      this.needs = list;
      console.log(this.needs);
    } , err => console.log(err));
  }
  islogin(){
    return this.accountservice.loggedin();
  }
}
