import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
    Errors:any;
    newEvent:any;
    id:any;
    step1:boolean=true;
    step2:boolean=false;
    step3:boolean=false;
    step:string="1";
  ngOnInit() {
    this.newEvent={
      title:"",
      date:Date,
      ampm:"",
      time:"",
      street:"",
      city:"",
      state:"",
      zip:"",
      host:[],
      photo:"",
      details:""
    }
  }
  newEventSubmission(){
    console.log(this.newEvent);
    this._httpService.addEvent(this.newEvent)
    .subscribe(data=>{
      this.id=data["id"];
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
    this._router.navigate(['events/:id']);
  }
  step1switch(){
    this.step1=true;
    this.step2=false;
    this.step="1";

  }
  step2switch(){
    this.step2=true;
    this.step1=false;
    this.step3=false;
    this.step="2";
  }
  step3switch(){
    this.step2=false;
    this.step3=true;
    this.step="3";
  }
}
