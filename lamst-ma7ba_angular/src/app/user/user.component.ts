import { Component, OnInit } from '@angular/core';
import { User } from '../_Models/User';
import { UsersService } from '../_Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UsersService) { }
users: User[];
  ngOnInit(): void {
    this.showUsers();
  }
showUsers(){
  this.userservice.showusers().subscribe((res: User[]) => {this.users = res ; });
}
}
