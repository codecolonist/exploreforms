import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from './../apiservice.service';
import { credrepo } from '../forms/credrepo';

@Component({
  selector: 'listcreds',
  templateUrl: './listcreds.component.html',
  styleUrls: ['./listcreds.component.scss']
})
export class ListcredsComponent implements OnInit {
  
  credrepolist : credrepo[]=[];
  isSpinning=false;
 
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
    this.isSpinning=true;
    this.apiservice.getcall("credentialsservice/allcred").subscribe(
      
      resp => {
        this.isSpinning=false;
       this.credrepolist=resp;
        console.log(this.credrepolist);
      }

    )
  }

}
