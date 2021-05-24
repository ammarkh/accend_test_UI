import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HomeworkService } from 'src/app/service/homework.service';
import { Homework } from 'src/app/model/homework';

@Component({
  selector: 'app-list-homework',
  templateUrl: './list-homework.component.html',
  styleUrls: ['./list-homework.component.css']
})
export class ListHomeworkComponent implements OnInit {
  classId: Number;
  homeworkList: Homework[] = [];
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private homeworkService: HomeworkService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.classId = Number.parseInt(this.route.snapshot.paramMap.get("classId"));
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,

    };

    this.classId = Number.parseInt(this.route.snapshot.paramMap.get("classId"));

    this.homeworkService.getHomeworkByCourseId(this.classId).subscribe(result => {
      console.log(result);
      this.homeworkList = (result as any)
      this.dtTrigger.next()
    });
  }

}
