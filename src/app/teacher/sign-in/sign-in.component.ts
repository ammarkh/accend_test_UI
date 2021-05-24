import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private loginService: LoginService, public teacherService: TeacherService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }



  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.teacherService.formData = {
      fullName: '',
      password: '',
      username: '',
      teacherId: null
    }
  }

  onSubmit(form: NgForm) {
    this.signIn(form);
  }

  signIn(form: NgForm) {
    this.teacherService.signIn(form.value).subscribe(res => {
      if (res == "UNAUTHORIZED")
        this.toastr.error("username or password not correct", "Teacher Login Error");
      else {
        localStorage.setItem("teacher", JSON.stringify(res));
        this.router.navigate(['/teacher/class']);
      }
    })

    this.loginService.isUserLoggedIn.next("teacher");
  }

  reLoad() {
    this.router.navigate([this.router.url])
  }

}
