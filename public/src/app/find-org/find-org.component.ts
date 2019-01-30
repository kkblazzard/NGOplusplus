import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-find-org',
  templateUrl: './find-org.component.html',
  styleUrls: ['./find-org.component.css']
})
export class FindOrgComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  orgs:any;

  ngOnInit() {
    this.getAllOrgs();
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
