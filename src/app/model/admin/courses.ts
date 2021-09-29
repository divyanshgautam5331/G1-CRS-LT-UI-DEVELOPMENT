export class Courses {
    public  courseId: number;
    public  courseName: String;
    public courseFee: number;
    public  courseType: String;
    public courseDuration: String;
    public  courseDetails: String;
    public courseSemesterId: number;
    public professorId: number;

    constructor(courseId: number,courseName: String,courseFee: number,courseType: String,courseDuration: String,courseDetails: String, courseSemesterId: number,professorId: number)
    {
            this.courseId = courseId;
            this.courseName = courseName;
            this.courseFee = courseFee;
            this.courseType = courseType;
            this.courseDuration = courseDuration;
            this.courseDetails = courseDetails;
            this.courseSemesterId = courseSemesterId;
            this.professorId = professorId;

    }
}
