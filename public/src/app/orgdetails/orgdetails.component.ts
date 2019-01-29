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
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id=params['id'];
      this.getOrg()
    });
  }
  getaAuthor(){
    this._httpService.getOrg(this.id)
    .subscribe(Author=>{
      console.log("pulled a author from db",Author);
      this.author=Author;
      console.log("Author",this.author)
    });
  };
}
