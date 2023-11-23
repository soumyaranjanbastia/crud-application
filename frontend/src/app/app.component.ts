import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './model/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.retriveStudents();
  }

  retriveStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.students = res as Student[];
    });
  }

  onSubmit(e: any) {
    if (this.student.id != 0) {
      this.studentService
        .updateStudent(this.student.id, this.student)
        .subscribe(() => {
          this.retriveStudents();
          e.reset();
          this.student.id = 0;
        });
    } else {
      this.studentService.saveStudent(e.value).subscribe((res) => {
        this.retriveStudents();
        e.reset();
      });
    }
  }

  onEdit(id: number) {
    this.studentService.getStudent(id).subscribe((res) => {
      this.student = res as Student;
    });
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id).subscribe((res) => {
      this.retriveStudents();
    });
  }
}
