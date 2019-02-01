import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin:boolean=false;
  userID: string;
  searchOrg:boolean=true;
  searchEvent:boolean=false;
  elmnt=document.getElementById('orgsearch');
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      console.log( params)
    });
    console.log()
    this.userID = localStorage.getItem('loginUserID');

  };
  clearLogin(){
    localStorage.clear();
    ;
  }
  orgsrch(){
    this.searchEvent=false;
    this.searchOrg=true;
    this.scroll('orgsearch');
  }
  eventsrch(){
    this.searchEvent=true;
    this.searchOrg=false;
    this.scroll('eventsearch');
  }
  scroll(id){
    this._router.navigate(['']);
    let el = document.getElementById(id);

    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
    }
  }

