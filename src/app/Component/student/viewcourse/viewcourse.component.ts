import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  semesterId: number;

  constructor(private _httpService:StudentServiceService) { }

  ngOnInit(): void {
  }

  getRegisteredCourseDetails(){
    this._httpService.viewRegisteredCourse(101,this.semesterId).subscribe(
      res => {
        console.log('==21==',res);
        
      },
      error => {
        console.log('===26==', error);
       
        
      }
    )
  }

}
