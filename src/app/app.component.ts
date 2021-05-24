import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginType: String;
  isMenuCollapsed = true;

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {

    this.loginService.isUserLoggedIn.subscribe((value) => {
      this.loginType = value;
    })

  }




  signOutTeacher() {
    localStorage.removeItem("teacher");
    this.loginService.isUserLoggedIn.next("intern");
  }

  signOutStudent() {
    localStorage.removeItem("student");
    this.loginService.isUserLoggedIn.next("intern");
  }
}
