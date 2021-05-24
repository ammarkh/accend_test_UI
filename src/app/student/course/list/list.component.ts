import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { StudentCourse } from 'src/app/model/custom-model/StudentCourse';
import { CourseService } from 'src/app/service/course.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  studentCourses: StudentCourse[];
  dtTrigger: Subject<any> = new Subject<any>();
  studentId: Number;

  constructor(private courseService: CourseService, private toastr: ToastrService, private loginService: LoginService) {
  }

  ngOnInit(): void {

    if (localStorage.getItem("student") != null)
      this.loginService.isUserLoggedIn.next('student');

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,

    };

    this.studentId = Number.parseInt(JSON.parse(localStorage.getItem("student")).studentId);

    this.courseService.getStudentCourses(this.studentId).subscribe(res => {
      this.studentCourses = (res as any);
      this.dtTrigger.next();
    });

  }

  joinClass(classId: Number) {
    this.courseService.joinStudentClass(this.studentId, classId).subscribe(res => {
      this.toastr.success("you are joined to class", "Class Join");
      location.reload();
    });
  }



}
