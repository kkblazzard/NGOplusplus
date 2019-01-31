import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin:boolean=false;
  userID: string;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.userID = localStorage.getItem('loginUserID');

  };

  clearLogin(){
    localStorage.clear();
    ;
  }
  
}
