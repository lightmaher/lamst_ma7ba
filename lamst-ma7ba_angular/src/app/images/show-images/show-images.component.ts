import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/_Models/image';
import { AccountService } from 'src/app/_Services/Account.service';
import { ImageService } from 'src/app/_Services/image.service';
import { ImagecatService } from 'src/app/_Services/imagecat.service';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.css']
})
export class ShowImagesComponent implements OnInit {
  p = 1;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private accountservice: AccountService , private route: ActivatedRoute, private ImageService: ImageService) { }
 catid: number;
 images: Image[];
  ngOnInit(): void {
   // tslint:disable-next-line:no-string-literal
 this.catid =  this.route.snapshot.params['id'];
 this.getimages();
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44367/${serverPath}`;
  }
  getimages(){
    this.ImageService.showimages(this.catid).subscribe((imgs: Image[]) => this.images = imgs);
  }
  login(){
    return this.accountservice.loggedin();
  }
  delete_image(id){
    this.ImageService.deleteImage(id).subscribe(res => { this.getimages(); } , err => { console.log('err'); } );
    }
}
