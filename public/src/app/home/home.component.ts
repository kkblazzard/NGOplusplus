import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  orgs:any;
  events:any;
  ngOnInit() {
    
  }
  getAllOrgs(){
    this._httpService.getAllOrgs()
    .subscribe(orgs=>{
      console.log("received all orgs",orgs);
      this.orgs=orgs;
      console.log("orgs set to passable variable orgs",this.orgs);
    });
  };
}
