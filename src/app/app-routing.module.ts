import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './Component/professor/professor.component';
//import { ViewCourseComponent } from './Component/professor/view-course/view-course.component';
import { RegistercourseComponent } from './Component/student/registercourse/registercourse.component';
import { StudentComponent } from './Component/student/student.component';
import { ViewcourseComponent } from './Component/student/viewcourse/viewcourse.component';
import { ViewgradeComponent } from './Component/student/viewgrade/viewgrade.component';
import { UserloginComponent } from './Component/user/userlogin/userlogin.component';

const routes: Routes = [
  { path : '', component:  UserloginComponent },
  { path : 'student/home',component: StudentComponent,
  
  children:[
 // { path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'register-course', component: RegistercourseComponent },
  { path: 'courses', component: ViewcourseComponent},
  { path: 'grade-card', component:ViewgradeComponent }
  // children: [
  //   { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
  //   { path: 'normalOrder', component:  NormalordercomponentComponent},
  //   { path: 'premiumOrder', component:  PremiumordercomponentComponent},
  // ]},
]},
{path:'professor/home',component:ProfessorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
