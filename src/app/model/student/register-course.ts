export class RegisterCourse {

    public  courseId: number;
    public  courseName: String;
    public courseFee: number;
    public  courseType: String;
    public courseDuration: String;
    public  courseDetails: String;
    public  paymentStatus: String;

    constructor(courseId: number,courseName: String,courseFee: number,courseType: String,courseDuration: String,courseDetails: String, paymentStatus: String)
    {
            this.courseId = courseId;
            this.courseName = courseName;
            this.courseFee = courseFee;
            this.courseType = courseType;
            this.courseDuration = courseDuration;
            this.courseDetails = courseDetails;
            this.paymentStatus = paymentStatus;

    }

}
