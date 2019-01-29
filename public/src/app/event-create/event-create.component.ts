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
  ngOnInit() {
    this.newEvent={
      title:"",
      date:"",
      time:"",
      location:"",
      host:[],
      photo:"",
      details:""
    }
  }

}
