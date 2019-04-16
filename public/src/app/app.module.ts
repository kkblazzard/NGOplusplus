import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrgregComponent } from './orgreg/orgreg.component';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';
import { FindOrgComponent } from './find-org/find-org.component';
import { FindEventComponent } from './find-event/find-event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LogregComponent } from './logreg/logreg.component';
import { SafePipe } from './safepipe';

import { HeaderComponent } from './header/header.component';
import { EditOrgComponent } from './edit-org/edit-org.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { PaymentsComponent } from './payments/payments.component';
import { Module as StripeModule } from "stripe-angular";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrgregComponent,
    OrgdetailsComponent,
    FindOrgComponent,
    FindEventComponent,
    EventCreateComponent,
    EventDetailsComponent,
    LogregComponent,
    SafePipe,
    HeaderComponent,
    EditOrgComponent,
    EditEventComponent,
    PaymentsComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StripeModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
