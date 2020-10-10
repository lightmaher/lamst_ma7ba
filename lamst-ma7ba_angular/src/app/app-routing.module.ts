import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'events', component: EventsComponent},
  {path: 'addevent', component: AddEventComponent },
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
