import { Injectable } from '@angular/core';
import { Microservice } from './microservice.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService {
formData : Microservice;
readonly rootURL ="http://localhost:7567/api/MS"
list : Microservice[];
  constructor(private http : HttpClient) { }
  PostAsync(formData : Microservice){
    return this.http.post(this.rootURL+'/MS',formData);
     
   }
   refreshList(){
    this.http.get(this.rootURL)
    .toPromise().then(res => this.list = res as Microservice[]);
  }
}
