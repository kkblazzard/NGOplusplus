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

  userObj:any;  //whoe user obj incl orgId
  userOrgAdmin:any;
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
    this.getUserObj();
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
        this.sponsors = [];
        this.event.host.forEach(orgId => {
          this.getOrg(orgId)
        });
        // for (var i=0;i<this.event.messages.length;i++){
        //   getUser(this.event.message[1]["authorId"], function(){

        //   })
        // }


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

  // getUser(id, callback){
  //   return this._httpService.getUser(id)
  //   .subscribe(user=>{

  //   })
  // }
  //###################################################################
  //ADD THIS TO HTTP SERVICE FILE
  // getUser(id){
  //   console.log("httpSErvice getting user",id);
  //   return this._http.get(`/api/users/${id}`);
  // }
  //###########################################################
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
    // this.eventWnewHost={'host': this.userObj.orgId};
    this.event.host.push(this.userObj['orgId']);
    this._httpService.updateEvent(this.eventId, this.event)
      .subscribe(data=>{
        console.log("event host added, ", data);
        this.getEvent(this.eventId);
      })
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
        this.userOrgAdmin = true;
      }
      else {
        console.log("user does not have orgId, UserOrgAdmin false")
        this.userOrgAdmin = false;
      }
    })
  }

}