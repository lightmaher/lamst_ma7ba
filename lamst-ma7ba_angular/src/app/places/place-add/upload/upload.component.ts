import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  baseUrl = 'https://localhost:44367/api/place/Upload';
  public progress: number;
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
    formData.append('file' , this.uploadForm.get('image').value);
    this.http.post(this.baseUrl , formData , {reportProgress: true , observe: 'events'}).
    subscribe(event => {
      if (event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100 * event.loaded / event.total);
      }
      else if (event.type === HttpEventType.Response){
        this.onUploadFinished.emit(event.body);
        console.log(event.body);
      }
    });
  }

  onFileSelect(event){
    if (event.target.files.length > 0){
        const file = event.target.files[0];
        this.uploadForm.get('image').setValue(file);
    }
  }
}
