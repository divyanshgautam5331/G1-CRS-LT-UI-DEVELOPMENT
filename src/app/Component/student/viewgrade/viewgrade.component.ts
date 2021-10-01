import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';

@Component({
  selector: 'app-viewgrade',
  templateUrl: './viewgrade.component.html',
  styleUrls: ['./viewgrade.component.css']
})
export class ViewgradeComponent implements OnInit {

  constructor(private _httpService:StudentServiceService) { }

  semesterId: number;
  getData:any[];
  ngOnInit(): void {
  }

  getGradeCard(){
    {
      this._httpService.viewGradeCard(101,this.semesterId).subscribe(
        (res:any[]) => {
          console.log('==21==',res);
          this.getData=res;

          
        },
        error => {
          console.log('===26==', error);
          
          
        }
      )
    }
  
  }

}
