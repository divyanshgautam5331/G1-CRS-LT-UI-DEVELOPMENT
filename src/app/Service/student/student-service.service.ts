import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { NGXLogger } from 'ngx-logger';


const baseUrl = 'http://localhost:8082/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  getViewAvailableCourse(semId){
    return this.http.get(`${baseUrl}/availablecourse/${semId}`);
  }

  registerCourse(student_id,semester_id,course_id){
    console.log('==20==',semester_id,course_id);
    
    
    return this.http.post(`${baseUrl}/registercourse/${student_id}/${semester_id}/${course_id}`,null);
  }

  viewRegisteredCourse(student_id,semester_id){
    return this.http.get(`${baseUrl}/viewregistercourse/${student_id}/${semester_id}`);
  }

  removeCourse(student_id,semester_id,course_id){
    return this.http.delete(`${baseUrl}/removecourse/${student_id}/${semester_id}/${course_id}`);
  }

  paymentList(student_id){
    return this.http.get(`${baseUrl}/paymentlist/${student_id}`);
  }

  viewGradeCard(student_id,semester_id){
    return this.http.get(`${baseUrl}/viewgradecard/${student_id}/${semester_id}`);
    
  }

  payFeeCash(data,student_id,course_id){
    return this.http.post(`${baseUrl}/payfeecash/${student_id}/${course_id}`,data);
  }

  payFeeCard(data,student_id,course_id){
    return this.http.post(`${baseUrl}/payfeecard/${student_id}/${course_id}`,data);
  }

  }

