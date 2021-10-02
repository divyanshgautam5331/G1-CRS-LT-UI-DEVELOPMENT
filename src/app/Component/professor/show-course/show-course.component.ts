import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Courses } from 'src/app/model/admin/courses';
import{ProfessorServiceService}  from 'src/app/service/professor/professor-service.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {
 
  course:any;
  model=new Courses(0,'',0,'','','',0,0);
  res: any;

  constructor(private logger: NGXLogger, private _httpService:ProfessorServiceService) {
    this.logger.debug("inside the constructor")
  }
    
   

  ngOnInit(): any {
    this.getCourses();
  }
    
   public getCourses()
   {this._httpService.getViewCourse(this.model.professorId).subscribe((res : any[])=>{
    this.course = res;
   this.logger.debug(res);
   this.logger.debug(JSON.stringify(this.res));

})

   } 
}
