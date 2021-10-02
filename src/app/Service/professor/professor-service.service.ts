import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from 'src/app/model/professor/grade';
//import { HTTP_OPTIONS} from './header.config';

const baseURL = 'http://localhost:8082/professor';
const hdr =new HttpHeaders()

.set('content-type','application/json');

@Injectable({
  providedIn: 'root' //this providein default scope is root that means this service scope is accessible entire in agular application
 
})
export class ProfessorServiceService {

  courses:any;
  constructor(private http:HttpClient) { }
 
//we need to refer all the spring rest url's here


public getViewCourse(professorId) {
  return this.http.get
  ('http://localhost:8082/professor/viewcourse/'+professorId);         
}

public registeredStudents(professorId) {
  return this.http.get
  ('http://localhost:8082/professor/viewregisteredtudents/'+professorId);         
}

public showCourseList(student_id,semesterId)
{
  return this.http.get
  ('http://localhost:8082/professor/courselist'+student_id,semesterId); 
  
}

addGrades(grade:Grade){
  return this.http.post('http://localhost:8082/professor/addgrade',grade,{headers:hdr, responseType: 'text'});
  //const headers = { 'content-type': 'application/json'}  
  //const body=JSON.stringify(grade);
  //console.log(body)
  //return this.http.post(`${baseURL}/addgrade` + 'people', body,{'headers':headers})
}
}
