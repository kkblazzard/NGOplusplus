import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orgreg',
  templateUrl: './orgreg.component.html',
  styleUrls: ['./orgreg.component.css']
})
export class OrgregComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  newOrg:any="";
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  completed:any;
  ngOnInit() {
    this.newOrg={name:"", mission:"",ein: Number, logo:"", admins:[], events:[], webAddress:"", fbAddress:"", twAddress:"",street:"",city:"", state:"", zip:Number,}
  
  }
  newOrgSubmission(){

  }
  step1switch(){
    this.step1=true;
    this.step2=false;
    this.completed=33;

  }
  step2switch(){
    this.step2=true;
    this.step1=false;
    this.step3=false;
    this.completed=66;
  }
  step3switch(){
    this.step2=false;
    this.step3=true;
    this.completed=66;
  }
}
