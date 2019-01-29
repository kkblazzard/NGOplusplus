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
    Errors:any;
  newOrg:any="";
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  step:string="1";
  completed:any;
  ngOnInit() {
    this.newOrg={
      name:"", 
      mission:"",
      ein: Number, 
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
  }
  newOrgSubmission(){
    console.log(this.newOrg);
    this._httpService.addOrg(this.newOrg)
    .subscribe(data=>{
      console.log("new org added to db",data);
      if (data['errors']){
        this.Errors = data['errors'];
          console.log("This is data['errors']");
          console.log(data['errors'])
      }
      else{
        this.godetails();
      }
    });
  }
  godetails(){
    this._router.navigate(['orgs/details']);
  }
  step1switch(){
    this.step1=true;
    this.step2=false;
    this.completed="33";
    this.step="1";

  }
  step2switch(){
    this.step2=true;
    this.step1=false;
    this.step3=false;
    this.completed=33;
    this.step="2";
  }
  step3switch(){
    this.step2=false;
    this.step3=true;
    this.completed=66;
    this.step="3";
  }
}
