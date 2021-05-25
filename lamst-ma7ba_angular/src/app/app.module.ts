import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { EventDetailsComponent } from './events/event/event-details/event-details.component';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddNeedComponent } from './needs/add-need/add-need.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import { ImagesComponent } from './images/images.component';
import { AddImageComponent } from './images/add-image/add-image.component';
import { DonateComponent } from './donate/donate.component';
import { UploadPlaceComponent } from './places/place-add/upload-place/upload-place.component';
import {NeedsComponent} from './needs/needs.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddImagecatComponent } from './images/add-imagecat/add-imagecat.component';
import { ShowImagesComponent } from './images/show-images/show-images.component';
import { FacebookComponent } from './facebook/facebook.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    AboutUsComponent,
    AddNeedComponent,
    UserAddComponent,
    UserComponent,
    SidebarComponent,
    ImagesComponent,
    AddImageComponent,
    DonateComponent,
    UploadPlaceComponent,
    NeedsComponent,
    AddImagecatComponent,
    ShowImagesComponent,
    FacebookComponent
   ],
  imports: [
    IvyCarouselModule,
    MatMomentDateModule,
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    MatCardModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line:object-literal-shorthand
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:44367'],
        disallowedRoutes: [''],
      },
    }),
    AppRoutingModule,
    MatDatepickerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
