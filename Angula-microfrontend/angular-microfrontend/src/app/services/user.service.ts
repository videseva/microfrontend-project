import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:4000/api/';
  constructor(private http: HttpClient) { }
  post(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'store-user', user)
      .pipe(
        tap(),
        catchError(error => {
          return of(error);
        })
      );
  }
}
