import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/student/student.component';
import { ProfessorComponent } from './Component/professor/professor.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';
import { RegistercourseComponent } from './Component/student/registercourse/registercourse.component';
import { AddcourseComponent } from './Component/admin/addcourse/addcourse.component';
import { AddprofessorComponent } from './Component/admin/addprofessor/addprofessor.component';
import { ApprovestudentComponent } from './Component/admin/approvestudent/approvestudent.component';
import { GeneratereportcardComponent } from './Component/admin/generatereportcard/generatereportcard.component';
import { ViewallcourseComponent } from './Component/admin/viewallcourse/viewallcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfessorComponent,
    AdminComponent,
    UserComponent,
    RegistercourseComponent,
    AddcourseComponent,
    AddprofessorComponent,
    ApprovestudentComponent,
    GeneratereportcardComponent,
    ViewallcourseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
