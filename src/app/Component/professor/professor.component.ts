import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  
  constructor(private logger: NGXLogger) {
    this.logger.debug("inside the constructor")
  }

  
  ngOnInit(): void {
  }

  
  
}
