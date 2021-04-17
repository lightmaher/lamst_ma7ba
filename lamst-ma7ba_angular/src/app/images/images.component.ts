import { Component, OnInit } from '@angular/core';
import { Image } from '../_Models/image';
import { Imagecat } from '../_Models/imagecat';
import { AccountService } from '../_Services/Account.service';
import { ImageService } from '../_Services/image.service';
import { ImagecatService } from '../_Services/imagecat.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
   p = 1;
  images: Image[];
  imagescat: Imagecat[];
  constructor(private imageservice: ImageService, private accountservice: AccountService , private imagecatservice: ImagecatService) { }

  ngOnInit(): void {
    this.getImagescat();
  }
getImagescat(){
  this.imagecatservice.getimagescat().subscribe((imgcats: Imagecat[]) => {this.imagescat = imgcats; } );
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44367/${serverPath}`;
}
login(){
  return this.accountservice.loggedin();
}
delete(id){
  return this.imagecatservice.deleteimagecat(id).subscribe( res => {
    this.getImagescat();
  });
}

}
