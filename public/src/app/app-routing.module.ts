import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';
import { OrgregComponent } from './orgreg/orgreg.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: "", component: HomeComponent},
  {path: "orgs/details/:id", component: OrgdetailsComponent},
  {path: "orgs/registration", component: OrgregComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
