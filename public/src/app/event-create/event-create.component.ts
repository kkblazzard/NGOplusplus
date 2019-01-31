import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  org: any;
  orgId: any;
  Errors: any;
  newEvent: any;
  id: any;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step: string = "1";

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ", params['id'])
      this.orgId = params['id'];
    });

    this.newEvent = {
      title: "",
      date: Date,
      ampm: "",
      time: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      host: [],
      photo: "",
      details: "",
      messages: []
    }

    this._httpService.getOrg(this.orgId)
      .subscribe(data => {
        this.org=data;
      })
  }
  newEventSubmission() {
    console.log(this.newEvent);
    this.newEvent.host.push(this.orgId);
    this._httpService.addEvent(this.newEvent)
      .subscribe(data => {
        this.id = data["_id"];
        console.log("new event added to db", data);
        if (data['errors']) {
          this.Errors = data['errors'];
          console.log("This is data['errors']");
          console.log(data['errors'])
        }
        else {
          this.org.events.push(data["_id"]);
          this._httpService.updateOrg(this.orgId, this.org)
            .subscribe(data => {
              if (data['errors']) {
                console.log("This is data['errors'] for updating the org");
                console.log(data['errors'])
              }
              else {
                this.godetails();
              }
            })
        }
      })
  }
  godetails() {
    this._router.navigate(['event/' + this.id]);
  }
  step1switch() {
    this.step1 = true;
    this.step2 = false;
    this.step = "1";

  }
  step2switch() {
    this.step2 = true;
    this.step1 = false;
    this.step3 = false;
    this.step = "2";
  }
  step3switch() {
    this.step2 = false;
    this.step3 = true;
    this.step = "3";
  }
}
