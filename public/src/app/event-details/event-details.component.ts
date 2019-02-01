import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  user: any; //userid actually
  sponsors: any;
  eventId: any;
  host: any;
  hostId: any;
  event: any = "";
  map: any;
  eventmessages: any;
  newMessage: any;
  googlemap: any = "https://www.google.com/maps/embed/v1/search?key=AIzaSyB9458WCJDqSCuz6GbbWXGFaG7aba4flQA&q=";
  admin:any;
  userObj:any;  //whoe user obj incl orgId
  showCohost:any;
  eventWnewHost: any;
  
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.user = localStorage.getItem('loginUserID');
    this.event = {
      title: "",
      date: new Date,
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
    this.eventmessages = [];
    this.showCohost=true;
    this.admin=false;

  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ", params['id'])
      this.eventId = params['id'];
      this.getEvent(this.eventId);
    });
    this.newMessage = {
      authorId: "",
      authorName: "",
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
      this.sponsors = [];
      this.event.host.forEach(orgId => {
        this.getOrg(orgId)
        this.getUserObj();
        });
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

  submitMessage() {
    this.newMessage.authorId = this.user;
    return this._httpService.getUser(this.user)
      .subscribe(user => {
        this.newMessage.authorName = user["username"];
        return this._httpService.addMessage(this.eventId, this.newMessage)
          .subscribe(event => {
            console.log(event["messages"])
            console.log("got a response back from the server");
            this.getEvent(this.eventId);
            this.newMessage = {
              authorId: "",
              content: ""
            }
          })
      })
  }

  deleteMessage(id) {
    console.log("getting id ", id)
    console.log(this.eventId)
    return this._httpService.deleteMessage(this.eventId, id)
      .subscribe(event => {
        console.log ("I've made it to the deleteMessage callback")
        this.getEvent(this.eventId);
      })
  }

//-----------for adding co-sponsor-------------------
  addCosponsor(){
    console.log("addCosponsor clicked");
    return this._httpService.getOrg(this.userObj['orgId'])
      .subscribe(org => {
        //get the org that the user is associated with
        org["events"].push(this.eventId) //add this even to that org
        this._httpService.updateOrg(this.userObj['orgId'], org)
        .subscribe(data => {
          //update that org with the new eventid added
          if (data['errors']) {
            console.log("This is data['errors'] for updating the org");
            console.log(data['errors'])
          }
          else {
            this.event.host.push(this.userObj['orgId']);//add the organization id to the event host list
            this._httpService.updateEvent(this.eventId, this.event)//update the event with the new organization
              .subscribe(data=>{
                console.log("event host added, ", data);
                this.getEvent(this.eventId);
                this.showCohost=false;
                this.admin=true;
              })
          }
        })
      });
    //#####################
    //the event needs to be added to their organizations event array
    //the org is this.userObj['orgId'], and the event id is this.eventId
  }

// -----------current login user detail-----------------
  getUserObj(){
    this._httpService.getUser(this.user)
    .subscribe(user => {
      this.userObj = user;
      console.log("got the user object", this.userObj);
      //also check if user is admin
      if (this.userObj['orgId'] != null){
        console.log("user has orgId, UserOrgAdmin true")
        this.sponsors.forEach(orgId => {
          console.log("I'm checking the sponsors to see if the user is among them")
          console.log(orgId[0]);
          console.log(user["orgId"])
          if (orgId[0]==user["orgId"]){
            console.log("THE USER IS AMONG THEM")
            this.showCohost = false;
            this.admin=true;
          }
        })
        //check if the user's org id is in the array of sponsors.
      }
      else {
        console.log("user does not have orgId, showCohost false")
        this.showCohost = false;
      }
    })
  }

}