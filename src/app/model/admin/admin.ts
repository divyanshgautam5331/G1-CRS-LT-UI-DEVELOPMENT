export class Admin {

    public  adminId: number;
    public  adminName: String;
    public  adminEmail: String;
    public  adminGender: String;
    public  adminDOB: number;
    public  adminContactNo: number;
    public  courseId: number;

    

    constructor(adminId: number, adminName: String, adminEmail: String, adminGender: String, adminDOB: number, adminContactNo: number, courseId: number) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminGender = adminGender;
        this.adminDOB = adminDOB;
        this.adminContactNo = adminContactNo;
        this.courseId = courseId;
    }
}
