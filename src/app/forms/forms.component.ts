import { Component, OnInit } from '@angular/core';
import { credrepo } from './credrepo';
import {ApiserviceService} from './../apiservice.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private apiservice:ApiserviceService) { }

  credrepolist : credrepo[]=[];
  credrepoobj : credrepo;

  ngOnInit() {
  }
    isMessage=false;
    message:string;
    model=new credrepo('gulte','gulteud@gulte.com','gultepwd',new Date(),new Date());

  addcred(){
    this.credrepoobj=this.model;
    this.apiservice.postcall("credentialsservice/addcred",this.credrepoobj).subscribe(
   
      resp => {
      
        this.isMessage=true;
        this.credrepoobj=resp;
        console.log(resp);
        this.message="credential added for" +this.credrepoobj.username;
         
      }

    )
  
   console.log(this.credrepolist);

  }
}
