import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-sign-in',
  templateUrl: './student-sign-in.component.html',
  styleUrls: ['./student-sign-in.component.css']
})
export class StudentSignInComponent implements OnInit {

  constructor(public studentService: StudentService, private loginService:LoginService ,private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.studentService.formData = {
      fullName: '',
      password: '',
      studentId: null,
      username: ''
    }
  }

  onSubmit(form: NgForm) {
    this.signIn(form);
  }

  signIn(form: NgForm) {
    this.studentService.studentSignIn(form.value).subscribe(res => {
      if (res == "UNAUTHORIZED")
        this.toastr.error("student username or password invalid", "Student Login Error");
      else {
        localStorage.setItem("student", JSON.stringify(res));
        this.route.navigate(['/student/course']);
        this.loginService.isUserLoggedIn.next("student");
      }
    });
  }

}
