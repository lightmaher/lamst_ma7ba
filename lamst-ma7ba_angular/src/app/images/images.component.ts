import { Component, OnInit } from '@angular/core';
import { Image } from '../_Models/image';
import { AccountService } from '../_Services/Account.service';
import { ImageService } from '../_Services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
   p = 1;
  images: Image[];
  constructor(private imageservice: ImageService, private accountservice: AccountService) { }

  ngOnInit(): void {
    this.getImages();
  }
getImages(){
  this.imageservice.showimages().subscribe((imgs: Image[]) => {this.images = imgs; } );
}
public createImgPath = (serverPath: string) => {
  return `https://localhost:44367/${serverPath}`;
}
delete_image(id){
this.imageservice.deleteImage(id).subscribe(res => { this.getImages(); } , err => { console.log('err'); } );
}
login(){
  return this.accountservice.loggedin();
}

}
