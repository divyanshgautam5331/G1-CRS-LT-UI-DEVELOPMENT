import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  semesterId: number;

  getData = [];
  viewDataCalled = false;
  noCourseMsg = '';
  details=[];
  studentId:any;
  constructor(private _httpService:StudentServiceService) {
    this.studentId = localStorage.getItem('studentId');
   }

  ngOnInit(): void {
  }

  getRegisteredCourseDetails(){
    this.getData = [];
    this.viewDataCalled = true;
    this._httpService.viewRegisteredCourse(this.studentId,this.semesterId).subscribe(
      (res:any[]) => {
        console.log('==21==',res);
        this.getData = res;
        
      },
      error => {

        this.noCourseMsg = error?.error;
        console.log('===26==', error);
       
        
      }
    )
  }

  removeRegisteredCourse(semesterId,courseId){

    this._httpService.removeCourse(this.studentId,semesterId,courseId).subscribe(
      

      res=>{
        console.log("inside subscribe");
      
      for(var i=0;i<this.getData.length;i++){
        if(courseId===this.getData[i].courseId){
          const index = this.details.indexOf(this.getData[i])
          this.getData.splice(index,1)
          
        }
      }
     },
     
     error => {

      this.noCourseMsg = error?.error;
      console.log('===failed==', error);}
      )

  }

}
