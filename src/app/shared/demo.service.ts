import { Injectable } from '@angular/core';
import { Demo } from './demo.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  formData:Demo
  list: Demo[];

  readonly rootURL= 'http://localhost:7567/api';
  constructor(private http:HttpClient) { }

  
  
  
 
  refreshlist(){
    
    return this.http.get(this.rootURL+'/Domain')
    .toPromise().then(res => this.list = res as Demo[])
    
    }
    postDemo(formData :Demo)
  {
   return this.http.post(this.rootURL+'/Domain',this.formData);

  }

}