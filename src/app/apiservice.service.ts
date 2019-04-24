import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  postcall(path: string,Req: any): Observable<any> {
    console.log(Req);
   return this.http.post<any>("http://localhost:8080/"+path, Req, httpOptions)
     .pipe(
       //catchError(this.handleError('addHero', hero))
     );
 }
 
 getcall(path: string): Observable<any> {
  
 return this.http.get<any>("http://localhost:8080/"+path, httpOptions)
   .pipe(
     //catchError(this.handleError('addHero', hero))
   );
}


}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};