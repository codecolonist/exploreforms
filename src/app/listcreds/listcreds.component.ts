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
  dataSource:any;
  
  displayedColumns: string[] = ['domain', 'username', 'password'];
 
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
    this.apiservice.getcall("/allcred").subscribe(
   
      resp => {
       this.credrepolist=resp;
       this.dataSource = this.credrepolist;
        console.log(this.credrepolist);
      }

    )
  }

}
