import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Homework } from 'src/app/model/homework';
import { HomeworkService } from 'src/app/service/homework.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  homeworkList: Homework[];
  dtTrigger: Subject<any> = new Subject<any>();
  courseId: Number;
  studentId: Number;
  currentDate = new Date();
  constructor(private homeworkService: HomeworkService, private route: ActivatedRoute, private toastr: ToastrService, private loginService: LoginService) { }

  ngOnInit(): void {

    if (localStorage.getItem("student") != null)
      this.loginService.isUserLoggedIn.next("student");

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,

    };

    this.courseId = Number.parseInt(this.route.snapshot.paramMap.get("courseId"));
    this.studentId = Number.parseInt(JSON.parse(localStorage.getItem("student")).studentId);


    this.homeworkService.getHomeworkByCourseIdAndStudentId(this.courseId, this.studentId).subscribe(res => {
      this.homeworkList = (res as any)
      this.dtTrigger.next();
    });
  }

  submitHomework(homeworkId: Number) {
    this.homeworkService.submitHomework(this.studentId, homeworkId).subscribe(res => {
      this.toastr.success("homework submit", "Homework submit");
      location.reload();
    });
  }

}
