import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student/student';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';
//import { NGXLogger } from 'ngx-logger';
import{RegisterCourse} from 'src/app/model/student/register-course'

@Component({
  selector: 'app-registercourse',
  templateUrl: './registercourse.component.html',
  styleUrls: ['./registercourse.component.css']
})
export class RegistercourseComponent implements OnInit {

  

  semesterId: number;
  courseId: number;


  constructor(private _httpService:StudentServiceService) { 
  }

  ngOnInit(): void {
  }

  // viewAvailableCourse(){
  //   this._httpService.getViewAvailableCourse(this.semester_id).subscribe(
  //     (res : number)=>{
  //       //console.log(res);
  //      this.logger.debug(res);
  //     this.semester_id = res;}
  //   );

  registerNewCourse(){

    this._httpService.registerCourse(101,this.semesterId,this.courseId).subscribe(
      (res)=>{
               console.log(res);
             // this.logger.debug(res);
           //this.semester_id = res;
          },
          (error) => {
            console.log('==43==',error);
            
          }



    )
  }


  }

  


