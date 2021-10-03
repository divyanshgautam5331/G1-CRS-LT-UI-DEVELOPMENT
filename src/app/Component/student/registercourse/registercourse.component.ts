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
  getData:any[];
  studentId:any;



  constructor(private _httpService:StudentServiceService) { 
     this.studentId = localStorage.getItem('studentId');
  }

  ngOnInit(): void {
    
  }

  getAvailableCourse() {
    this._httpService.getViewAvailableCourse(this.semesterId).subscribe(
      (res:any[]) => {
        this.getData = res;
      }
    )
    
  }


  registerNewCourse(){

    this._httpService.registerCourse(this.studentId,this.semesterId,this.courseId).subscribe(
      (res)=>{
               console.log(res);
          },
          (error) => {
            console.log('==43==',error);
            
          }



    )
  }


  }

  


