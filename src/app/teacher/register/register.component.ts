import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  constructor(public teacherService: TeacherService, private toastr: ToastrService, private route:Router) { }

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
    this.insertTeacher(form);
  }

  insertTeacher(form: NgForm) {
    this.teacherService.addTeacher(form.value).subscribe(res => {
      this.toastr.success("the teacher inserted successfully", "Teacher Register")
      this.resetForm(form)
      this.route.navigate(["/teacher/sign_in"]);
    });
  }
}
