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


    model=new credrepo('gulte','gulteud@gulte.com','gultepwd',new Date(),new Date());

  addcred(){
    this.credrepoobj=this.model;
    this.apiservice.postcall("addcred",this.credrepoobj).subscribe(
   
      resp => {
      
        console.log(resp);
         
      }

    )
  
   console.log(this.credrepolist);

  }
}
