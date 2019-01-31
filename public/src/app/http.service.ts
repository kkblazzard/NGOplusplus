import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // -------------------users------------------------------
  userUpdate(id, userUpdate) {
    console.log("http.service userupdate", userUpdate);
    return this._http.put('/api/users/' + id, userUpdate);
  }
  addUser(newOrg) {
    console.log("http.service addUser", newOrg);
    return this._http.post('/api/users', newOrg);
  }
  


// ------------------orgs-------------------------------
updateOrg(id, orgUpdate) {
  console.log("in http.service.update", orgUpdate);
  return this._http.put('/api/orgs/' + id, orgUpdate);
}
getOrg(id) {
  console.log("httpService", id);
  return this._http.get(`/api/orgs/${id}`);
}
deleteOrg(id) {
  return this._http.delete('/api/orgs/' + id);
}
addOrg(newOrg) {
  console.log("http.service", newOrg);
  return this._http.post('/api/orgs', newOrg);
}
getAllOrgs() {
  return this._http.get('/api/orgs');
}


// --------------------Events-----------------------
addEvent(newEvent) {
  console.log("in httpService addEvent", newEvent);
  return this._http.post('/api/events', newEvent);
}
getEvent(id) {
  console.log("in httpService getEvent id is", id);
  return this._http.get('/api/events/' + id);
}
getUser(id) {
  console.log("httpSErvice getting user", id);
  return this._http.get(`/api/users/${id}`);
}
getAllEvents() {
  console.log("in httpService gotAllEvent ");
  return this._http.get('/api/events/');
}
updateEvent(id, eventUpdate) {
  console.log("in http.service.update event", eventUpdate);
  return this._http.put('/api/events/' + id, eventUpdate);
}
deleteEvent(id) {
  console.log("in http.service delete event");
  return this._http.delete('/api/events/' + id);
}


// -------------------log&reg-----------------------
  confirmLogin(user) {
    console.log("http.service confirmLogin", user);
    return this._http.post('/api/users/login', user);
  }

  // ----------------messaging-------------------
  addMessage(eventid, message) {
    console.log("in httpService addMessage");
    return this._http.patch('/api/events/' + eventid, message);
  }
  deleteMessage(eventid, messageid) {
    console.log("in httpService deleteMessage");
    return this._http.delete('/api/events/' + eventid + "/" + messageid);
  }

  // ---------none route code shared functions

  get loginUserID(): boolean {
    let s = localStorage.getItem('loginUserID');
    if (s) {
      return true;
    }
    return false;
  }


}

