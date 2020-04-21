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
import { HttpClientModule } from "@angular/common/http";
import { DemoService } from './shared/demo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoComponent } from './demos/demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
    DemosComponent,
    DemoComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
