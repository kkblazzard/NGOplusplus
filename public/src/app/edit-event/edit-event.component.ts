import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventId: any;
  Errors: any;
  event: any;
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
      this.eventId = params['id'];
    });

    this.event = {
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
    this.getEvent(this.eventId)
  }
  getEvent(id) {
    this._httpService.getEvent(id)
      .subscribe(event => {
        this.event = event;
      });
  };
  updateEventSubmission() {
    console.log(this.event);
    this.event
      this._httpService.updateEvent(this.eventId,this.event)
        .subscribe(data => {
          this.event = data;
          console.log("event updated in db", data);
          if (data['errors']) {
            this.Errors = data['errors'];
            console.log("This is data['errors']");
            console.log(data['errors'])
          }
          else {
            this.godetails();
          }
        });
  }
  godetails() {
    this._router.navigate(['event/' + this.eventId]);
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
