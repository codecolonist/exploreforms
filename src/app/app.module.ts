import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule }   from '@angular/forms';
import { ListcredsComponent } from './listcreds/listcreds.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[
  {path: "",component:LoginComponent},
  {path :"home/:lastName",component:HomeComponent,children:[  
  {path :"addform",component:FormsComponent},
  {path :"listcred",component:ListcredsComponent},
  ]}


]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListcredsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(routes,{
    enableTracing:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
