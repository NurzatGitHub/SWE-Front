import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './model/Course';
import { Observable } from 'rxjs';
import { LessonAttendance } from './model/LessonAttendance';
import { Group } from './model/Group';
import { attendanceType } from './model/AttendancyType';
import { AttendanceRecord } from './model/AttendanceRecords';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  BASE_URL = 'https://swe-sr8e.onrender.com/';
  constructor(private http: HttpClient) { }

  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(`${this.BASE_URL}courses/get/courses/`);
  // }

  
  getCourses(): Observable<Course[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Course[]>(`${this.BASE_URL}courses/get/courses/`, { headers: headers });
  }

  getCourseById(courseId: Number): Observable<Course> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<Course>(`${this.BASE_URL}courses/get/courses/${courseId}`, { headers: headers });
  }
  getCourse(): Observable<Course> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Course>(`${this.BASE_URL}courses/get/courses/`, { headers: headers });
  }
  
  getGroups(): Observable<Group[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Group[]>(`${this.BASE_URL}courses/get/groups/`, { headers: headers });
  }

  getLessonAttendance(lessonId: number): Observable<LessonAttendance[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.BASE_URL}courses/get/lesson/attendance/${lessonId}/`;
    return this.http.get<LessonAttendance[]>(url, { headers: headers });
  }


  getAttendancyType(): Observable<attendanceType[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<attendanceType[]>(`${this.BASE_URL}courses/get/attendancytype/`, { headers: headers });
  }

  addAttendance(attendanceId: number, courseId: number , course_name: string, username: string): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    // Переименовываем attendance_id и course_id в attendance и course
    const payload = { attendance: attendanceId, course: courseId ,course_name: course_name, username:username};
    return this.http.post(`${this.BASE_URL}courses/add-attendance/`, payload, { headers: headers });
  }
  

  getAttendanceRecords(): Observable<AttendanceRecord[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<AttendanceRecord[]>(`${this.BASE_URL}courses/attendance-records/`, { headers: headers });
  }

  updateReason(recordId: number, reason: string): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const payload = { reason };

    return this.http.post(`${this.BASE_URL}courses/update-reason/${recordId}/`, payload, { headers });
  }

  

  addStudNote(email:string ,course_name: string, accept: string): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    // Переименовываем attendance_id и course_id в attendance и course
    const payload = {email:email,course_name: course_name, accept:accept};
    return this.http.post(`${this.BASE_URL}courses/add_stud_note/`, payload, { headers: headers });
  }
}
