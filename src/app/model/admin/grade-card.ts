export class GradeCard {

    public  studentId: number;
    public  studentName: String;
    public  courseId: number;
    public  courseName: String;
    public  semesterId: number;
    public  grade: String;

    

    constructor(studentId: number, studentName: String, courseId: number, courseName: String, semesterId: number, grade: String) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.courseId = courseId;
        this.courseName = courseName;
        this.semesterId = semesterId;
        this.grade = grade;
    }
}
