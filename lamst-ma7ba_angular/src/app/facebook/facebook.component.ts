import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeLocation(locationData) {

    // save current route first
    const currentRoute = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    });
}


}
