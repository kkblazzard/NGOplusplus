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
    org:any="";
  ngOnInit() {
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
      this.org=this.getOrg()
    });
  }
  getOrg(){
    this._httpService.getOrg(this.id)
    .subscribe(org=>{
      console.log("pulled a Org from db",org);
      this.org=org;
      console.log("Org",this.org)
    });
  };
}
