import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeacherService } from './service/teacher.service';
import { ToastrModule } from 'ngx-toastr';
import { StudentService } from './service/student.service';
import { CalendarModule } from 'primeng/calendar';
import { ListComponent } from './student/course/list/list.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, NgbModule,
    ReactiveFormsModule, DataTablesModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    ToastrModule.forRoot()
  ],
  providers: [TeacherService,
    StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
