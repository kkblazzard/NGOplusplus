import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    getAllOrgs(){
      return this._http.get('/api/orgs');
        
      }
    getOrg(id){
      console.log("httpService",id);
      return this._http.get(`/api/orgs/${id}`);
    }
    deleteOrg(id){
      return this._http.delete('/api/orgs/'+id);
    }
    addOrg(newOrg){
      console.log("http.service",newOrg);
      return this._http.post('/api/orgs',newOrg);
    }
    updateOrg(id,orgUpdate){
      console.log("in http.service.update", orgUpdate);
      return this._http.put('/api/orgs/'+id,orgUpdate);
    }
    addEvent(newEvent){
      console.log("in httpService addEvent",newEvent);
      return this._http.post('/api/events',newEvent);
    }
    addUser(newOrg){
      console.log("http.service addUser",newOrg);
      return this._http.post('/api/users',newOrg);
    }

    userUpdate(id, userUpdate){
      console.log("http.service userupdate", userUpdate);
      return this._http.put('/api/users/'+id, userUpdate);
    }

    confirmLogin(user){
      console.log("http.service confirmLogin", user);
      return this._http.post('/api/users/login', user);
    }
    getEvent(id){
      console.log("in httpService getEvent id is",id);
      return this._http.get('/api/events/'+id);
    }
    getAllEvents(){
      console.log("in httpService gotAllEvent ");
      return this._http.get('/api/events/');
    }
    addMessage(eventid, message){
      console.log("in httpService addMessage");
      return this._http.patch('/api/events/'+ eventid, message);
    }
}

