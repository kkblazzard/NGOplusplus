import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.css']
})
export class EditOrgComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  Errors: any;
  org: any = "";
  id: any;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step: string = "1";

  userID: string;
  updateUser: {};

  ngOnInit() {
    this.org = {
      name: "",
      mission: "",
      ein: Number,
      phone: "",
      email: "",
      logo: "",
      admins: [],
      events: [],
      webAddress: "",
      fbAddress: "",
      twAddress: "",
      street: "",
      city: "",
      state: "",
      zip: Number,
    };
    this._route.params.subscribe((params: Params) => {
      console.log("incoming id ", params['id'])
      this.id = params['id'];
      this.getOrg()
    });
  };


  getOrg() {
    this._httpService.getOrg(this.id)
      .subscribe(org => {
        this.org = org;
      });
  }
  updateOrgSubmission() {
    console.log("You're calling the update org submission function");
    this._httpService.updateOrg(this.id, this.org)
      .subscribe(data => {
        console.log("org updated in database", data);

        if (data['errors']) {
          this.Errors = data['errors'];
          console.log("This is data['errors']");
          console.log(data['errors'])
        }
        else {
          this.godetails()
          // console.log("I coulehave called godetails")
        }
      });
  }
  delete() {
    this._httpService.deleteOrg(this.id);
    this._router.navigate(['']);
  }
  godetails() {
    console.log("routing!")
    this._router.navigate(['/orgs/details/' + this.id]);
  }

  step1switch() {
    this.step1 = true;
    this.step2 = false;
    this.step = "1";

  }
  step2switch() {
    this.step2 = true;
    this.step1 = false;
    this.step3 = false;
    this.step = "2";
  }
  step3switch() {
    this.step2 = false;
    this.step3 = true;
    this.step = "3";
  }

}
