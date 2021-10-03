import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './Component/professor/professor.component';
import { AddGradesComponent } from './Component/professor/add-grades/add-grades.component';
import { RegisterStudentsComponent } from './Component/professor/register-students/register-students.component';
import { ShowCourseComponent } from './Component/professor/show-course/show-course.component';
import { UserloginComponent } from './Component/user/userlogin/userlogin.component';

const routes: Routes = [
  
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'viewcourse', component: ShowCourseComponent },
    { path: 'addgrade', component: AddGradesComponent},
    { path: 'viewregisteredtudents', component: RegisterStudentsComponent},
    { path: 'logout', component: UserloginComponent},

   
  
    //{ path: '', redirectTo: 'professor', pathMatch: 'full'},
     
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
