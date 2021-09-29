export class Grade {

    public  courseId: number;
    public courseName:  String;
    public studentId: number;
    public semesterId: number;
    public  grade:  String;

    constructor( courseId: number,courseName:  String,studentId: number,semesterId: number,grade:  String)
    {
        this.courseId = courseId;
        this.courseName = courseName;
        this.studentId = studentId;
        this.semesterId = semesterId;
        this.grade = grade;
    }


}
