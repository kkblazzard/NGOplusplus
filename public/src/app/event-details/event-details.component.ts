import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  user:any; //userid actually
  sponsors: any;
  eventId: any;
  host: any;
  hostId: any;
  event: any = "";
  map: any;
  newMessage:any;
  googlemap: any = "https://www.google.com/maps/embed/v1/search?key=AIzaSyB9458WCJDqSCuz6GbbWXGFaG7aba4flQA&q=";

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.user=localStorage.getItem('loginUserID');
    this.event = {
      title: "",
      date: Date,
      time: "",
      ampm: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      host: [],
      photo: "",
      details: "",
      messages: [],
    }
    this.sponsors = [];

  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ", params['id'])
      this.eventId = params['id'];
      this.getEvent(this.eventId);
    });
    this.newMessage={
      authorId:"",
      content: ""
    }
  }
  getEvent(id) {
    console.log("##################################################");
    console.log("user: ", this.user);
    this._httpService.getEvent(id)
      .subscribe(event => {
        this.event = event;
        this.map = `${this.googlemap}${this.event.street} ${this.event.city}, ${this.event.state}`;
        console.log(event);
        console.log(this.map)
        console.log("6935 37th Ave SW. Seattle, WA")
        // this.hostId=this.event.host[0]
        // console.log("hostId",this.hostId)
        this.sponsors =[];
        console.log(this.sponsors);
        this.event.host.forEach(orgId => {
          this.getOrg(orgId)
        });

        // this.host=this.getOrg(this.hostId);
        // if(this.event.host[1]){
        //   this.cohostId=this.event.host[1];
        //   this.cohost=this.getOrg(this.cohostId);
        // }
      });
  };
  getOrg(id) {
    return this._httpService.getOrg(id)
      .subscribe(org => { //this is building the sponsor object
        console.log("pulled a Org from db", org);
        console.log(org["_id"]);
        this.sponsors.push([org["_id"], org["name"]]);
        console.log("HERE ARE THE SPONSORS");
        console.log(this.sponsors);
      });
  };

  submitMessage(){
    this.newMessage.authorId=this.user;
    return this._httpService.addMessage(this.eventId, this.newMessage)
    .subscribe(event=>{
      console.log(event["messages"])
      console.log("got a response back from the server");
      this.getEvent(this.eventId);
      this.newMessage={
        authorId:"",
        content: ""
      }
    })
  }
}
