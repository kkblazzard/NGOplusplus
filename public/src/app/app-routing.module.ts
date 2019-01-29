import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';
import { OrgregComponent } from './orgreg/orgreg.component';

const routes: Routes = [
  {path: "orgs/details/:id", component: OrgdetailsComponent},
  {path: "orgs/registration", component: OrgregComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
