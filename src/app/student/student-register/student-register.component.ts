import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(public studentService: StudentService, private toastr: ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.studentService.formData = {
      fullName: '',
      password: '',
      username: '',
      studentId: null
    }
  }

  onSubmit(form: NgForm) {
    this.insertStudent(form);
  }

  insertStudent(form: NgForm) {
    this.studentService.addStudent(form.value).subscribe(res => {
      this.toastr.success("student has been added ", "New Student Added ")
      this.resetForm(form);
      this.route.navigate(['/student/sign_in']);
    });
  }

}
