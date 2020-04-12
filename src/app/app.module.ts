import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule  } from"@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';
import { DemosComponent } from './demos/demos.component';
import { DemoListComponent } from './demos/demo-list/demo-list.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
    DemosComponent,
    DemoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
