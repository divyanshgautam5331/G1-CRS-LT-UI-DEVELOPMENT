import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/student/student.component';
import { ProfessorComponent } from './Component/professor/professor.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';
import { RegistercourseComponent } from './Component/student/registercourse/registercourse.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfessorComponent,
    AdminComponent,
    UserComponent,
    RegistercourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
