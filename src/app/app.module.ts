import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/student/student.component';
import { ProfessorComponent } from './Component/professor/professor.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';
import { RegistercourseComponent } from './Component/student/registercourse/registercourse.component';
import { AddGradesComponent } from './Component/professor/add-grades/add-grades.component';
import { RegisterStudentsComponent } from './Component/professor/register-students/register-students.component';
import { ViewCourseComponent } from './Component/professor/view-course/view-course.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfessorComponent,
    AdminComponent,
    UserComponent,
    RegistercourseComponent,
    AddGradesComponent,
    RegisterStudentsComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
