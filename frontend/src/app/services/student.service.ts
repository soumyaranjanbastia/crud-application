import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Student';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:1200';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(this.baseUrl);
  }

  getStudent(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  saveStudent(student: Student) {
    return this.http.post(this.baseUrl, student);
  }

  updateStudent(id: number, student: Student) {
    return this.http.put(this.baseUrl + `/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
