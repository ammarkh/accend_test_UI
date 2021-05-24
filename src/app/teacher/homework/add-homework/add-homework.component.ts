import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeworkService } from 'src/app/service/homework.service';

@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.css']
})
export class AddHomeworkComponent implements OnInit {
  classId: Number;
  constructor(public homeworkService: HomeworkService, private route: ActivatedRoute, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.classId = Number.parseInt(this.route.snapshot.paramMap.get("classId"));
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.homeworkService.formData = {
      dueDate: null,
      teacherClass: null,
      title: '',
      homeworkId: null,
      submit:null,
      count:null
    }

  }

  onSubmit(form: NgForm) {
    this.insertHomework(form);
  }

  insertHomework(form: NgForm) {
    this.homeworkService.addHomework(form.value, this.classId).subscribe(res=>{
      this.toastr.success("homework has added successfully", "Homework. Added");
      this.resetForm(form);
      this.router.navigate(["/teacher/class/homework/"+this.classId]);
    });
  }

}
