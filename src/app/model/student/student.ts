export class Student {


        public  studentId: number;
        public  studentName: String;
        public  studentEmail: String;
        public  gender: String;
        public  studentDOB: number;
        public  contact_no: number;
        public  semester_id: number;
    
        constructor(studentId: number,studentName: String,studentEmail: String,gender: String,studentDOB: number,contact_no: number,semester_id: number)
        {
                this.studentId = studentId;
                this.studentName = studentName;
                this.studentEmail = studentEmail;
                this.gender = gender;
                this.studentDOB = studentDOB;
                this.contact_no = contact_no;
                this.semester_id = semester_id;
        }
    
    }
    

