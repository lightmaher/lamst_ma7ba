import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { title } from 'process';
import { Place } from '../../_Models/place';
import { PlaceService } from '../../_Services/place.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {

  constructor(private fb: FormBuilder ,
              private placeS: PlaceService ,
              private activeRoute: ActivatedRoute) { }
  response: {url: ''};
  Editurl: string;
  message: string;
  placeId = 0;
  placeForm: FormGroup;
  btnTitle: string;
  place: Place;
  Title: string;
  messageValidate = {
    title: {
      required: 'Title is required'
    },
    description: {
      required: 'Description is required'
    }
  };
  isEditMode: boolean;
  ngOnInit(): void {
    this.message = '';
    this.Title = 'اضافة مكان جديد';
    this.btnTitle = 'اضافة مكان';
    this.placeForm = this.fb.group({
      title: ['' , Validators.required],
      description: ['' , Validators.required]
    });
    this.place = {
     placeId: 0,
     title: '',
     url: '',
     description: '',
     events : []
   };
    this.activeRoute.paramMap.subscribe(params => {
     const id = +params.get('id');
     if (id){
       this.placeId = id;
       this.placeS.GetPlace(id).subscribe(x => {
         this.place = x;
         this.Title = 'تعديل';
         this.btnTitle = 'اضافة التعديل';
         this.isEditMode = true;
         this.Editurl = this.place.url;
         this.AddPlaceData();
       } , err => console.log(err));
     }
   });
  }

  add(){
    this.ValidateModel();
    if (!this.isEditMode){
      this.place.url = this.response.url;
      this.placeS.addPlace(this.place).subscribe(x => {
        this.message = 'Place has been added succesfuly';
      } , err => console.log(err));
    }
    else{
      if (this.response.url === null){
        if (this.Editurl !== null){
          this.place.url = this.Editurl;
        }
      }else{
        this.place.url = this.response.url;
      }
      this.place.placeId = this.placeId;
      this.placeS.updatePlace(this.place).subscribe(x => {
        this.message = 'Product has been Updated successfully';
      } , err => console.log(err));
    }
    this.placeForm.reset();
  }

  AddPlaceData(){
    if (this.place !== null){
      this.placeForm.setValue({
        title: this.place.title,
        description: this.place.description
      });
    }
  }

  ValidateModel(){
    this.place.title = this.placeForm.value.title;
    this.place.description = this.placeForm.value.description;
  }
  uploadFinished(event){
    this.response = event;
  }
}
