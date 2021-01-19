import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UserLogin } from '../classes/user-login';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getProfile(): Observable<any>{
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient.get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  }

  public getPots(): Observable<any>{
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient.get<any>(url, this.httpOptions)
                .pipe(catchError(this.handleError));
  }

  public postProfile(data:Object): Observable<any>{
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient.post<any>(url, data, this.httpOptions)
                          .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  
  // public login(userLogin: UserLogin): Observable<any>  {
  //   let url = this.REST_API_SERVER + "Login/";
  //   return this.httpClient.post(url, UserLogin);
  // }
}
