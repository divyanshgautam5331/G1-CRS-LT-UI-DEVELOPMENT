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

  constructor(private _httpService:StudentServiceService) { }

  ngOnInit(): void {
  }

  getRegisteredCourseDetails(){
    this.getData = [];
    this.viewDataCalled = true;
    this._httpService.viewRegisteredCourse(101,this.semesterId).subscribe(
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

}
