import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Grade } from 'src/app/model/professor/grade';
import { ProfessorServiceService } from 'src/app/service/professor/professor-service.service';

@Component({
  selector: 'app-add-grades',
  templateUrl: './add-grades.component.html',
  styleUrls: ['./add-grades.component.css']
})
export class AddGradesComponent implements OnInit {

  grade= new Grade(0,'',0,0,'');
  message:any;
  res: Grade;
  constructor(private logger: NGXLogger, private _httpService:ProfessorServiceService) {
    this.logger.debug("inside the constructor")
   }

  ngOnInit(): void {
    this.addStudentGrade();
  }

  viewStudents()
  {
    
  }
  public addStudentGrade()
  {
   this._httpService.addGrades(this.grade)
   .subscribe(
    ( res: any) => {
       this.message = res;
       console.log(this.message);
      // this.logger.debug(res);
       //this.logger.debug(JSON.stringify(this.res));
      });
  }

}


