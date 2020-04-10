import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';
import { HttpClientModule } from '@angular/common/http';

import { MicroservicesComponent } from './microservices/microservices.component';
import { MicroserviceComponent } from './Microservices/microservice/microservice.component';
import { MicroserviceListComponent } from './Microservices/microservice-list/microservice-list.component';
import { MicroserviceService } from './shared/microservice.service';


import{FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
    MicroservicesComponent,
    MicroserviceComponent,
    MicroserviceListComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule
  ],
  providers: [MicroserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
