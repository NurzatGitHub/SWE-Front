import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notification } from './model/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  BASE_URL = 'https://swe-sr8e.onrender.com/';

  constructor(private http: HttpClient) { }

  createNotification(notificationData: Notification): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}courses/notifications/create/`, notificationData);
  }
}
