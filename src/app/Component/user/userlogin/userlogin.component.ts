import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../Service/user/user-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 userName: String;
 password: String;

  constructor(private readonly service: UserServiceService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    const user = {
      userName: this.userName,
      userPassword: this.password
    }
    this.service.signIn(user).subscribe(
     ( res: any) => {
        if(res.userType.toLowerCase() === 'student') {
          localStorage.setItem('studentId',res.id)
          this.router.navigateByUrl('student/home');
        }
        else if(res.userType.toLowerCase()==='professor'){
          localStorage.setItem('professorId',res.id)
          this.router.navigateByUrl('professor/home');
        }
      }
    )
  }

}
