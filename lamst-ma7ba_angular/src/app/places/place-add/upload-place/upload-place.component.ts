import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { PlaceGallery } from '../../../_Models/place';

@Component({
  selector: 'app-upload-place',
  templateUrl: './upload-place.component.html',
  styleUrls: ['./upload-place.component.css']
})
export class UploadPlaceComponent implements OnInit {

  uploadForm: FormGroup;
  baseUrl = 'https://localhost:44367/api/place/UploadGallery';
  public progress: number;
  myFiles: string[] = [];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUploadFinished = new EventEmitter();

  constructor(private fb: FormBuilder , private http: HttpClient) { }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      image: ['']
    });
  }
  onSubmit(){
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {  
      formData.append("file" , this.myFiles[i]);  
    }
    console.log(formData);
    this.http.post(this.baseUrl , formData , {reportProgress: true , observe: 'events'}).
    subscribe(event => {
      if (event.type === HttpEventType.Response){
        this.onUploadFinished.emit(event.body);
        console.log(event.body);
      }
    });
  }

  onFileSelect(event){
    const gallery = event.target.files;
    if (gallery.length > 0){
      for(let i= 0; i < gallery.length; i++){
        const file = event.target.files[i];
        this.myFiles.push(file);
        console.log(event);
      }
    }
  }
}
