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

const routes:Routes=[

  {path :"addform",component:FormsComponent,outlet:"form"},
  {path :"listcred",component:ListcredsComponent,outlet:"list"}


]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListcredsComponent
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
    RouterModule.forRoot(routes,{
    enableTracing:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
