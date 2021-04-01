import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Need } from '../../_Models/need';
import { HttpClient } from '@angular/common/http';
import { NeedService } from '../../_Services/need.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.css']
})
export class AddNeedComponent implements OnInit {

  needForm: FormGroup;
  need: Need;
  needId: number;
  Title: string;
  btnTitle: string;
  isEditMode: boolean;
  message: string;
  months = [   'january' , 'febrarusry', 'march', 'april' , 'may', 'june' , 'july' , 'augest', 'september' , 'november' , 'decemper'];
  messageValidate =  {
    month: {
      required: 'الشهر مطلوب'
    },
    description: {
      required: 'الاحتياجات مطلوبة'
    }
  };
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private needService: NeedService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.needId = 0;
    this.btnTitle = 'حفظ';
    this.needForm = this.fb.group({
      month: ['' , Validators.required],
      description: ['' , Validators.required]
    });
    this.need = {
      id: 0,
      month: '',
      description: ''
    };
    this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id){
        this.needId = id;
        this.needService.GetNeed(id).subscribe(x => {
          this.need = x;
          this.Title = 'تعديل';
          this.btnTitle = 'اضافة التعديل';
          this.isEditMode = true;
          this.AddNeedData();
        } , err => console.log(err));
      }
    });
  }

  Add(){
    this.ValidateModel();
    if (!this.isEditMode){
      this.needService.AddNeed(this.need).subscribe(x => {
        this.message = 'تم اضافة احتياجات الشهر';
      } , err => console.log(err));
    }
    else{
      this.need.id = this.needId;
      this.needService.EditNeed(this.need).subscribe(x => {
        this.message = 'لقد تم التعديل';
      } , err => console.log(err));
    }
    this.needForm.reset();
  }

  AddNeedData(){
    if (this.need !== null){
      this.needForm.setValue({
        month: this.need.month,
        description: this.need.description
      });
    }
  }
  ValidateModel(){
    this.need.month = this.needForm.get('month').value;
    this.need.description = this.needForm.get('description').value;
  }
}
