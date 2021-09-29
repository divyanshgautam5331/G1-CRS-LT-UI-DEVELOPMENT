export class CourseCatalog {


    public  courseId: number;
    public  professorId: number;
    public  courseCatalogId: number;
   // public coursesList:list = new list;

    
    constructor(courseId: number, professorId: number, courseCatalogId: number)
    { //List<Courses> coursesList) {
        this.courseId = courseId;
        this.professorId = professorId;
        this.courseCatalogId = courseCatalogId;
        //this.coursesList = coursesList;
    }
}


