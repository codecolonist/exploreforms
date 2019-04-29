import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiserviceService} from './../apiservice.service';

export class logRequest {

  constructor(public email: string,
    public password: string){
    
  }
  
}

export class loginResponse {
  firstName: string;
  lastName: string;
  serviceMessage: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logreq: logRequest;
   logres: loginResponse;
   isLogin: boolean;

  constructor(private apiservice : ApiserviceService,
              private router:Router) { }

  ngOnInit() {
  }


  model = new logRequest("example@gmail.com","********");

  userLogin(){

    this.logreq=this.model;

    console.log(this.logreq);

     this.apiservice.loginpostcall("loginservice/userLogin",this.logreq).subscribe(

        res => {

          this.logres=res;
          console.log(this.logres);

          if(this.logres.serviceMessage="Welcome"){
            this.router.navigate(["/home",this.logres.lastName]);
          }

           
        },
        err =>{
          console.log("error");
        }
        

     )
    
  }

}
