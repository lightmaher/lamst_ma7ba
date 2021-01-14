import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { UploadComponent } from './events/upload/upload.component';
import { PlacesComponent } from './places/places.component';
import { PlaceAddComponent } from './places/place-add/place-add.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceComponent } from './places/place/place.component';
import { AccountComponent } from './account/account.component';
import {JwtModule} from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { EventDetailsComponent } from './events/event/event-details/event-details.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { NeedsComponent } from './needs/needs.component';
import { AddNeedComponent } from './needs/add-need/add-need.component';




export function tokenGetter() {
  return localStorage.getItem('token');
}
export const FORMAT = {
  parse: {
      dateInput: 'DD-MM-YYYY',
  },
  display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    EventComponent,
    AddEventComponent,
    UploadComponent,
    PlacesComponent,
    PlaceAddComponent,
    PlaceDetailComponent,
    PlaceComponent,
    AccountComponent,
    FooterMenuComponent,
    EventDetailsComponent,
    ContactUsComponent,
    AdminComponent,
    MessagesComponent,
    NeedsComponent,
    AddNeedComponent,
  ],
  imports: [
    IvyCarouselModule,
    MatMomentDateModule,
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line:object-literal-shorthand
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:44367'],
        disallowedRoutes: [''],
      },
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
