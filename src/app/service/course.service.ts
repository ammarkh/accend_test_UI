import { Injectable } from '@angular/core';
import { TeacherClass } from '../model/teacher-class';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/teacher';
import { Observable } from 'rxjs';
import { rootUrl } from '../model/Util/Custom-conf';
import { StudentCourse } from '../model/custom-model/StudentCourse'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly teacherUrl = rootUrl + "teacher";
  readonly studentUrl = rootUrl + "student";
  formData: TeacherClass;
  constructor(private http: HttpClient) { }

  addClass(formData: TeacherClass) {
    formData.teacher = new Teacher();
    formData.teacher.teacherId = Number.parseInt(JSON.parse(localStorage.getItem("teacher")).teacherId);
    return this.http.post(this.teacherUrl + "/class_assign", formData);
  }

  getCourseByTeacherId(teacherId: Number): Observable<TeacherClass[]> {
    return this.http.get<TeacherClass[]>(this.teacherUrl + "/courses/" + teacherId);
  }

  getAllCourse(): Observable<TeacherClass[]> {
    return this.http.get<TeacherClass[]>(this.studentUrl + "/course/list");
  }

  getStudentCourses(studentId: Number): Observable<StudentCourse[]> {
    return this.http.get<StudentCourse[]>(this.studentUrl + "/class/" + studentId);
  }

  joinStudentClass(studentId: Number, classId: Number) {
    var studentCourse = new StudentCourse();
    studentCourse = {
      classId: classId,
      studentId: studentId,
      submit: false,
      title: ''
    }

    return this.http.post(this.studentUrl + "/join", studentCourse);
  }

}
