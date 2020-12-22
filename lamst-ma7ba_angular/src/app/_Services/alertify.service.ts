import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlretifyService {

constructor() { }
confirm(message: string, okCallback: () => any) {
  alertify.confirm(message, (e) => {
    if (e) {
      okCallback();
    } else {}
  });
}

success(message: string) {
  alertify.alert().setHeader('').setContent('<h2> لقد تم وصول رسالتك بنجاح <br>سنتواصل معك فى اقرب وقت </h2>').show();
}

error(message: string) {
  alertify.error(message);
}

warning(message: string) {
  alertify.warning(message);
}

message(message: string) {
  alertify.message(message);
}
alert(message: string){
  // tslint:disable-next-line:no-unused-expression
  alertify.alert(message).set('basic', true);
}
}
