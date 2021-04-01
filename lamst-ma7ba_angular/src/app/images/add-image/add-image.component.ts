import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from 'src/app/_Models/image';
import { ImageService } from 'src/app/_Services/image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
 form: FormGroup;
 image: Image;
 public response: {url: ''};

  constructor( private fb: FormBuilder, private  imageservices: ImageService , private roter: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
createForm(){
  this.form = this.fb.group(
    {
      title: ['', Validators.required],
      date: ['', ],

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
