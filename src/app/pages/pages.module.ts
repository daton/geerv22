import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms' 
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "../login/login.component";

import { PagesComponent } from "./pages.component";


import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";




@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  exports: [PagesComponent,  DashboardComponent],
  imports:[SharedModule,CommonModule,BrowserModule,
     PAGES_ROUTES, FormsModule]
})
export class PagesModule {}