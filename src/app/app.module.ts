import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeaderComponent } from './shared/header/header.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { BreadcrumpsComponent } from './shared/breadcrumps/breadcrumps.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Rutas
import { AppRoutes } from './app.routes';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


 
  ],
  imports: [
    BrowserModule, FormsModule,BrowserAnimationsModule, AppRoutes,PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
