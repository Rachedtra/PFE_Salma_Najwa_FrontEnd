import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {FormsModule ,ReactiveFormsModule  } from"@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';

//import { DemosComponent } from './demos/demos.component';
//import { HttpClientModule } from "@angular/common/http";
//import { DemoService } from './shared/demo.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { DemoComponent } from './demos/demo/demo.component';

import { HttpClientModule } from '@angular/common/http';
import { MicroserviceService } from './shared/microservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddUpdateMicroserviceComponent } from './SittingMs/add-update-microservice/add-update-microservice.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
   // DemosComponent,
    //DemoComponent,
   
  ],
 // imports: [
 //   BrowserModule,
  //  HttpClientModule,
  //  FormsModule ,
  //  ReactiveFormsModule,
 //   AppRoutingModule,
 //   BrowserAnimationsModule
//  ],
 // providers: [DemoService],

    GetDeleteMicroserviceComponent,
    AddUpdateMicroserviceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule],
  providers: [MicroserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
