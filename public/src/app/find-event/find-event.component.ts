import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-find-event',
  templateUrl: './find-event.component.html',
  styleUrls: ['./find-event.component.css']
})
export class FindEventComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  events:any;

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
}
