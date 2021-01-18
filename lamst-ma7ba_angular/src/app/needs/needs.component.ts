import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NeedService } from '../_Services/need.service';
import { Need } from '../_Models/need';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {

  needs: Need[];
  constructor(private http: HttpClient,
    private neddService: NeedService) { }

  ngOnInit(): void {
    this.getNeeds();
  }

  getNeeds(){
    this.neddService.GetAllNeeds().subscribe(list => {
      this.needs = list;
    } , err => console.log(err));
  }
}
