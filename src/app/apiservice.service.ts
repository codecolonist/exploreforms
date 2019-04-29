import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export interface loginres {
  serviceMessage: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  logres:loginres;
  isLoggenIn=false;
  private Url = "http://192.168.1.88:8080/";

  constructor(private http: HttpClient) { }


  postcall(path: string,Req: any): Observable<any> {
    console.log(Req);
   return this.http.post<any>(this.Url+path, Req, httpOptions)
     .pipe(
       //catchError(this.handleError('addHero', hero))
     );
 }

 loginpostcall(path: string,Req: any): Observable<loginres> {
  console.log(Req);
 
 return this.http.post<any>(this.Url+path, Req, httpOptions)
   .pipe(
    tap(res => {
        this.logres=res;
        if(this.logres.serviceMessage=="Welcome"){
          console.log("user logged in");
            this.isLoggenIn=true;
        }
    })
   );
}
 
 getcall(path: string): Observable<any> {
  
 return this.http.get<any>(this.Url+path, httpOptions)
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