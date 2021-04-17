import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagecat } from 'src/app/_Models/imagecat';
import { ImagecatService } from 'src/app/_Services/imagecat.service';

@Component({
  selector: 'app-add-imagecat',
  templateUrl: './add-imagecat.component.html',
  styleUrls: ['./add-imagecat.component.css']
})
export class AddImagecatComponent implements OnInit {

  form: FormGroup;
  constructor(private imagecatservice: ImagecatService , private fb: FormBuilder) { }
  imagecat: Imagecat;
  public response: {url: ''};
  ngOnInit(): void {
    this.form = this.fb.group (
      {
        title : ['' , Validators.required]
      }
    );
  }
  uploadFinished = (event) => {
    this.response = event;
  }
 addimagecat(){
   this.imagecat = Object.assign ( {}, this.form.value);
   this.imagecat.url = this.response.url;
   this.imagecatservice.addimagecat (this.imagecat).subscribe(
     res => { console.log('done'); }
   );
 }
}
