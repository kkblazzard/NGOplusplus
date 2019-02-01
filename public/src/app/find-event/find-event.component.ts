import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-find-event',
  templateUrl: './find-event.component.html',
  styleUrls: ['./find-event.component.css']
})
export class FindEventComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
    searchError:any;
  events:any;
  eventSearch:any={title:""};
  
  ngOnInit() {
    this.getAllevents();
  }

  getAllevents(){
    this._httpService.getAllEvents()
    .subscribe(events=>{
      console.log("received all events",events);
      this.events=events;
      console.log("All Events set to passable variable events",this.events);
    });
  };
  searchaEvent(){
    this._httpService.postEventName({'title':{"$regex":this.eventSearch.title,"$options":"i"}})
    .subscribe(event=>{
      if(event['error']){
        this.searchError=event['error'];
        console.log(this.searchError);
      }
      else{
        this.events=[event];
      }
    });
  }
}
