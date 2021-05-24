import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isUserLoggedIn: BehaviorSubject<String> = new BehaviorSubject<String>("intern");

  constructor(private http: HttpClient) {
    this.login();
  }

  login(): Observable<any> {
    if (localStorage.getItem("teacher") != null) {
      return of("teacher");
    }
    else if (localStorage.getItem("student") != null) {
      return of("student");
    }
    else {
      return of("intern");
    }
  }



}
