import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { TeacherClass } from '../model/teacher-class';
import { rootUrl } from '../model/Util/Custom-conf';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly rootURL = rootUrl + "student";
  formData: Student
  constructor(private http: HttpClient) { }

  addStudent(formData: Student) {
    return this.http.post(this.rootURL + "/register", formData);
  }

  studentSignIn(formData: Student) {
    return this.http.post(this.rootURL + "/login", formData);
  }

 
}
