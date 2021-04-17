import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventDetailsComponent } from './events/event/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AddImageComponent } from './images/add-image/add-image.component';
import { ImagesComponent } from './images/images.component';
import { AddNeedComponent } from './needs/add-need/add-need.component';
import { NeedsComponent } from './needs/needs.component';
import { PlaceAddComponent } from './places/place-add/place-add.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlacesComponent } from './places/places.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './Guard/auth-guard.service';
import { AddImagecatComponent } from './images/add-imagecat/add-imagecat.component';
import { ShowImagesComponent } from './images/show-images/show-images.component';


const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'events', component: EventsComponent},
  {path: 'addevent', component: AddEventComponent , canActivate: [AuthGuardService]},
  {path: 'places' , component: PlacesComponent},
  {path: 'add-place' , component: PlaceAddComponent , canActivate: [AuthGuardService]},
  {path: 'edit-place/:id' , component: PlaceAddComponent , canActivate: [AuthGuardService]},
  {path: 'place-detail/:id' , component: PlaceDetailComponent},
  {path: 'login' , component: AccountComponent},
  {path: 'event-detail/:id' , component: EventDetailsComponent},
  {path: 'contactus' , component: ContactUsComponent},
  {path: 'messages' , component: MessagesComponent , canActivate: [AuthGuardService]},
  {path: 'about' , component: AboutUsComponent},
  {path: 'users' , component: UserComponent },
  {path: 'add-user' , component: UserAddComponent},
  {path: 'needs' , component: NeedsComponent},
  {path: 'add-need' , component: AddNeedComponent , canActivate: [AuthGuardService]},
  {path: 'user-detail/:id' , component: UserDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'aboutus' , component: AboutUsComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'add-image' , component: AddImageComponent , canActivate: [AuthGuardService]},
  {path: 'donate' , component: DonateComponent},
  {path: 'add-imagecat' , component: AddImagecatComponent, canActivate: [AuthGuardService]},
  {path: 'images/imagescategorey/:id' , component: ShowImagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
