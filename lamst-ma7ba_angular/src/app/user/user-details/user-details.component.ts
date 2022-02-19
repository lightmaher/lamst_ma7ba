import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_Models/User';
import { UsersService } from 'src/app/_Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userservice: UsersService, private route: ActivatedRoute) { }
 id: number;
 user: User;
  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.showUser();
  }
showUser(){
  // tslint:disable-next-line:no-string-literal
  this.id = this.route.snapshot.params['id'];
  this.userservice.showUser(this.id).subscribe((res: User) => {this.user = res; } );
}
}
