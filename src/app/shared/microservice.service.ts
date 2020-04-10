import { Injectable } from '@angular/core';
import { Microservice } from './microservice.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService {

formData : Microservice;
readonly rootURL ='http://localhost:7567/api'
list : Microservice[];

  constructor(private http : HttpClient) { }

   
  refreshlist(){
    
    return this.http.get(this.rootURL+'/MS')
    
  }
}
