import { Component, OnInit } from '@angular/core';
import { credrepo } from './credrepo';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  credrepolist : credrepo[]=[];
  credrepoobj : credrepo;

  ngOnInit() {
  }

  login(x){
    console.log(x);
  }
    model=new credrepo('gulte','gulteud@gulte.com','gultepwd');

  addcred(){
    this.credrepoobj=this.model;
   this.credrepolist.push(this.credrepoobj);
  
   console.log(this.credrepolist);

  }
}
