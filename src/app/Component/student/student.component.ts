import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showRegisteredCourse = false;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  viewRegisteredCourses() {
    this.showRegisteredCourse = true;
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
