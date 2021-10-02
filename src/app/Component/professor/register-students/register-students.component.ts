import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student/student';
import { NGXLogger } from 'ngx-logger'
import { ProfessorServiceService } from 'src/app/service/professor/professor-service.service';
import { Professor } from 'src/app/model/admin/professor';

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.css']
})
export class RegisterStudentsComponent implements OnInit {

  
  student:Student[];
  model = new Professor(0,'','',0,'','');
  res: any;
  constructor(private logger: NGXLogger, private _httpService:ProfessorServiceService) {
    this.logger.debug("inside the constructor")
   }

  ngOnInit(): void {
    this.getRegStudents();
  }

  getRegStudents(){

    this._httpService.registeredStudents(this.model.professorId) 
  
          .subscribe((res : any[])=>{
            this.student = res;
            this.logger.debug(res);
            this.logger.debug(JSON.stringify(this.res));
      });
  }

}
