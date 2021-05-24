import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHomeworkComponent } from './teacher/homework/add-homework/add-homework.component';
import { ListHomeworkComponent } from './teacher/homework/list-homework/list-homework.component';
import { SignInComponent } from './teacher/sign-in/sign-in.component';
import { InternComponent } from './intern/intern.component';
import { StudentSignInComponent } from './student/student-sign-in/student-sign-in.component';
import { AddCourseComponent } from './teacher/course/add-course/add-course.component';
import { RegisterComponent } from './teacher/register/register.component';
import { ListCourseComponent } from './teacher/course/list-course/list-course.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { ListComponent } from './student/course/list/list.component';
import { HomeworkListComponent } from './student/course/homework/homework-list/homework-list.component';

const routes: Routes = [
  { path: '', component: InternComponent },
  { path: 'teacher/sign_in', component: SignInComponent },
  { path: 'student/sign_in', component: StudentSignInComponent },
  { path: 'teacher/add_class', component: AddCourseComponent },
  { path: 'teacher/register', component: RegisterComponent },
  { path: 'teacher/class', component: ListCourseComponent },
  { path: 'student/register', component: StudentRegisterComponent },
  { path: 'student/course', component: ListComponent },
  { path: 'student/course/homework/:courseId', component: HomeworkListComponent },
  { path: 'teacher/class/homework/:classId', component: ListHomeworkComponent },
  { path: 'teacher/class/homework/add/:classId', component: AddHomeworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  AddHomeworkComponent,
  ListHomeworkComponent,
  AddCourseComponent,
  SignInComponent,
  StudentSignInComponent,
  StudentRegisterComponent,
  RegisterComponent,
  ListCourseComponent,
  ListComponent,
  HomeworkListComponent
]
