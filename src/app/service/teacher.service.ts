import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  readonly rootURL = "http://localhost:9090/teacher"
  formData: Teacher;

  constructor(private http: HttpClient) { }

  addTeacher(formData: Teacher) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('No-Auth', 'True')
    return this.http.post(this.rootURL + "/register", formData, { responseType: 'text' });
  }

  signIn(form: Teacher) {
    return this.http.post(this.rootURL + "/login", this.formData);
  }
}
