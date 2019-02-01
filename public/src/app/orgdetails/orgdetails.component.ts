import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-orgdetails',
  templateUrl: './orgdetails.component.html',
  styleUrls: ['./orgdetails.component.css']
})
export class OrgdetailsComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
    id:any;
    admin:any;
    org:any="";
    events:any=[];
    event:any;
    googlemap:any="https://www.google.com/maps/embed/v1/search?key=AIzaSyB9458WCJDqSCuz6GbbWXGFaG7aba4flQA&q=";

    isLoggedin = false;
    // canJoin: any;
    
  ngOnInit() {
    this.admin=false;
    this.event={
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
      map:"",
    };
    this.org={name:"", 
    mission:"",
    ein: Number,
    phone:"",
    email:"", 
    logo:"", 
    admins:[], 
    events:[], 
    webAddress:"", 
    fbAddress:"", 
    twAddress:"",
    street:"",
    city:"", 
    state:"", 
    zip:Number,
    };
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ",params['id'])
      this.id=params['id'];
      this.getOrg()
    });
    
    if(localStorage.getItem('loginUserID') != null){
      this.isLoggedin = true;
      console.log("user is logged in", this.isLoggedin);
    }
  }


  getOrg(){
    this._httpService.getOrg(this.id)
    .subscribe(org=>{
      this.org=org;
      this.org.admins.forEach(person=>{
        console.log("ADMIN:", person);
        console.log("USER:", localStorage.getItem('loginUserID'));
        if (person==localStorage.getItem('loginUserID')){
          this.admin=true;
        }
        console.log("Admin status", this.admin);
      })
      console.log("pulled a Org from db",org);
      console.log("Org",this.org)
      this.org.events.forEach(element => {
        console.log(element);
      this.getEvent(element);
      });
    });
  };
  getEvent(id) {
    console.log(id);
    this._httpService.getEvent(id)
      .subscribe(event => {
        console.log("got event",event);
        this.event = event;
        this.event.map = `${this.googlemap}${this.event.street} ${this.event.city}, ${this.event.state}`;
        this.events.push(this.event);
      });
    }
    addAdmin(){
      this.org.admins.push(localStorage.getItem('loginUserID'));
      this._httpService.updateOrg(this.id, this.org)
        .subscribe(org=>{
          this.getOrg()
        })
    }
}
