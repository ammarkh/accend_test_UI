import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(public courseService: CourseService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.courseService.formData = {
      classId: null,
      title: '',
      teacher: null
    }
  }

  onSubmit(form: NgForm) {
    this.insertCourse(form);
  }

  insertCourse(form: NgForm) {
    this.courseService.addClass(form.value).subscribe(res => {
      this.toastr.success("class has added successfully", "class . Add");
      this.router.navigate(['/teacher/class']);
    });
  }

}
