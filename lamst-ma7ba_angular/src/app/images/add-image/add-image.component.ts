import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from 'src/app/_Models/image';
import { Imagecat } from 'src/app/_Models/imagecat';
import { ImageService } from 'src/app/_Services/image.service';
import { ImagecatService } from 'src/app/_Services/imagecat.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
 form: FormGroup;
 image: Image;
 public response: {url: ''};

  // tslint:disable-next-line:max-line-length
  constructor( private fb: FormBuilder, private  imageservices: ImageService , private roter: Router , private imagecatservice: ImagecatService) { }
  imagescat: Imagecat[];
  ngOnInit(): void {
    this.createForm();
    this.imagecatservice.getimagescat().subscribe((imagescats: Imagecat[]) => this.imagescat = imagescats);
  }
createForm(){
  this.form = this.fb.group(
    {
      title: ['', Validators.required],
      dateString: ['', ],
      imagecatId: ['', ]

    }
  );
}
uploadFinished = (event) => {
  this.response = event;
}
addimage(){
  this.image = Object.assign({}, this.form.value);
  this.image.url = this.response.url;
  this.imageservices.addImage(this.image).subscribe(res => {
    this.roter.navigate(['/images']);
  }, err => {
    console.log(err);
  } );
}
}
