import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';
import { OrgregComponent } from './orgreg/orgreg.component';
import { HomeComponent } from './home/home.component';
import { FindOrgComponent } from './find-org/find-org.component';
import { FindEventComponent } from './find-event/find-event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LogregComponent } from './logreg/logreg.component';

const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: "", component: HomeComponent},
  {path: "orgs/details/:id", component: OrgdetailsComponent},
  {path: "orgs/registration", component: OrgregComponent},
  {path: "orgs/find", component: FindOrgComponent},
  {path: "event/find", component: FindEventComponent},
  {path: "event/new", component: EventCreateComponent},
  {path: "event/:id", component: EventDetailsComponent},
  {path: "user", component: LogregComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
