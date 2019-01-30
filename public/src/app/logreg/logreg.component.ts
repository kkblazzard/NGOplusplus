import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  newUser = {};
  createNewErrors : any;

  loginInput = {};
  loginError :any;
  loggedinUser = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitNew() {
    let observable = this._httpService.addUser(this.newUser);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
        this.createNewErrors = data;
      }
      else{
        console.log("successfully added user");
        localStorage.setItem('loginUserID', data._id);
        console.log(localStorage.getItem('loginUserID'));

      }
    });
  }

  onSubmitLogin(){
    let observable = this._httpService.confirmLogin(this.loginInput);
    observable.subscribe(data => {
      if (data['error']) {
        console.log(data);
        this.loginError = data;
      }
      else{
        console.log("login success");
        this.loggedinUser = data;
        localStorage.setItem('loginUserID', this.loggedinUser._id);
        console.log(localStorage.getItem('loginUserID'));

      }
    })
  }

  clearLogin(){
    localStorage.clear();
  }
}
