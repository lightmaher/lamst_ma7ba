import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
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


const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'events', component: EventsComponent},
  {path: 'addevent', component: AddEventComponent },
  {path: 'places' , component: PlacesComponent},
  {path: 'add-place' , component: PlaceAddComponent},
  {path: 'edit-place/:id' , component: PlaceAddComponent},
  {path: 'place-detail/:id' , component: PlaceDetailComponent},
  {path: 'login' , component: AccountComponent},
  {path: 'event-detail/:id' , component: EventDetailsComponent},
  {path: 'contactus' , component: ContactUsComponent},
  {path: 'messages' , component: MessagesComponent},
  {path: 'about' , component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
