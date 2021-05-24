import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentHomework } from '../model/custom-model/StudentHomework';
import { Homework } from '../model/homework';
import { TeacherClass } from '../model/teacher-class';
import { rootUrl } from '../model/Util/Custom-conf';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  readonly studentUrl = rootUrl + "student";
  readonly teacherUrl = rootUrl + "teacher";
  formData: Homework;
  constructor(private http: HttpClient) { }

  addHomework(formData: Homework, courseId: Number) {
    console.log(formData + "//" + courseId);
    formData.teacherClass = new TeacherClass();
    formData.teacherClass.classId = courseId;
    return this.http.post(this.teacherUrl + "/add_homework", formData);
  }

  getHomeworkByCourseId(courseId: Number): Observable<Homework[]> {

    return this.http.get<Homework[]>(this.studentUrl + "/course/homework_list/" + courseId );
  }

  getHomeworkByCourseIdAndStudentId(courseId: Number, studentId: Number): Observable<Homework[]> {

    return this.http.get<Homework[]>(this.studentUrl + "/course/homework_list?classId=" + courseId + "&studentId=" + studentId);
  }

  submitHomework(studentId: Number, homeworkId: Number) {
    var studentHomework = {
      homeworkId: homeworkId,
      studentId: studentId
    }
    return this.http.post(this.studentUrl + "/submit", studentHomework);
  }

}
