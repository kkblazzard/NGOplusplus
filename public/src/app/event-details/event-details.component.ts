import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
    eventId:any;
    host:any;
    hostId:any;
    cohost:any;
    cohostId:any;
    event:any="";
    map:any;
    googlemap:any="https://www.google.com/maps/embed/v1/search?key=AIzaSyB9458WCJDqSCuz6GbbWXGFaG7aba4flQA&q=";
  ngOnInit() {
    this.event={
      title:"",
        date:Date, 
        time:"",
        street:"",
        city:"",
        state:"",
        zip:"",
        host:[],
        photo:"",
        details:"",
    }
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ",params['id'])
      this.eventId=params['id'];
      this.getEvent(this.eventId)
    });
  }
  getEvent(id){
    this._httpService.getEvent(id)
    .subscribe(event=>{
      this.event=event;
      this.map=`${this.googlemap}${this.event.street} ${this.event.city}, ${this.event.state}`;
      console.log( this.map)
      console.log("6935 37th Ave SW. Seattle, WA")
      this.hostId=this.event.host[0]
      console.log("hostId",this.hostId)
      this.host=this.getOrg(this.hostId);
      if(this.event.host[1]){
        this.cohostId=this.event.host[1];
        this.cohost=this.getOrg(this.cohostId);
      }
    });
  };
  getOrg(id){
    return this._httpService.getOrg(id)
    .subscribe(org=>{
      console.log("pulled a Org from db",org);
    });
  };
}
