export class Professor {
    
public professorId: number;
public professorName: String;
public professorEmail: String;
public courseId: number;
public professorDPTName: String;
public password: String;


constructor(professorId: number,professorName: String,professorEmail: String,courseId: number,professorDPTName: String,password: String)
{
    this.professorId = professorId;
    this.professorName = professorName;
    this.professorEmail = professorEmail;
    this.courseId = courseId;
    this.professorDPTName = professorDPTName;
    this.password = password;
}
}
