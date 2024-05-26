class student{
    constructor(name , email){
        this.name = name;
        this.email = email
        this.courses;
    }
    enroll(course){
        this.courses = course
        console.log(`${this.name} has enrolled in ${this.courses}`);
    }

    showCourses(){
        console.log(`${this.name} enrolled courses : ${this.courses}`);
    }
}

class Admission{
    constructor(){
        this.Students = []
    }
    enrollStudent(value){
        this.Students.push(value)
        console.log(`${value.name} has been enrolled`);
    }

    
    assignCourse(Student , course){
        if (Student.value === student.constructer) {
            Student.enroll(course)
        }else{
            console.log(`invalid student deails`);
        }
    }
    
    showEnrolledstudents(){
        console.log(`enrolled students:`);
        this.Students.forEach((student)=>{
            console.log(`-${student.name} (${student.email})`);
        })
    }

}







const admissionOffice = new Admission();

const student1 = new student('Mithun' , 'mithun@pw.live');
const student2 = new student('Farman' , 'farman@pw.live');


admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);


admissionOffice.assignCourse(student1 , 'full stack web development');
admissionOffice.assignCourse(student2 , 'Data Science Masters');


student1.showCourses();
student2.showCourses();


admissionOffice.showEnrolledstudents();
