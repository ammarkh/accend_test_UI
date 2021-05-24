import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Teacher } from 'src/app/model/teacher';
import { TeacherClass } from 'src/app/model/teacher-class';
import { CourseService } from 'src/app/service/course.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  courses: TeacherClass[];
  teacher: Teacher;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,

    };

    this.teacher = JSON.parse(localStorage.getItem("teacher"));

    this.courseService.getCourseByTeacherId(this.teacher.teacherId).subscribe(result => {
      this.courses = (result as any)
      this.dtTrigger.next()
    });



  };




}
