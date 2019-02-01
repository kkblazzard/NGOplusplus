import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-find-org',
  templateUrl: './find-org.component.html',
  styleUrls: ['./find-org.component.css']
})
export class FindOrgComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  searchError:any;
  orgs:any;
  orgSearch:any={title:""};
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
  searchaOrg(){
    this._httpService.postOrgName({'title':{"$regex":this.orgSearch.title,"$options":"i"}})
    .subscribe(org=>{
      if(org['error']){
        this.searchError=org['error'];
      }
      else{
      this.orgs=org;
      }
    });
  }
}
