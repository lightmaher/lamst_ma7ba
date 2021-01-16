import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventDetailsComponent } from './events/event/event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PlaceAddComponent } from './places/place-add/place-add.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlacesComponent } from './places/places.component';
import { NeedsComponent } from './needs/needs.component';
import { AddNeedComponent } from './needs/add-need/add-need.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'events', component: EventsComponent},
  {path: 'addevent', component: AddEventComponent },
  {path: 'places' , component: PlacesComponent},
  {path: 'add-place' , component: PlaceAddComponent},
  {path: 'edit-place/:id' , component: PlaceAddComponent},
  {path: 'place-detail/:id' , component: PlaceDetailComponent},
  {path: 'needs' , component: NeedsComponent},
  {path: 'add-need' , component: AddNeedComponent},
  {path: 'edit-need/:id' , component: AddNeedComponent},
  {path: 'login' , component: AccountComponent},
  {path: 'event-detail/:id' , component: EventDetailsComponent},
  {path: 'contactus' , component: ContactUsComponent},
  {path: 'messages' , component: MessagesComponent},
  {path: 'add-user' , component: UserAddComponent},
  {path: 'users' , component: UserComponent},
  {path: 'user-detail/:id' , component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
