import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  getMethodList()
  {
return this.http.get(environment.apiBaseURI + '/Methode');
  }
  PostMethod(formData){
    return this.http.post(environment.apiBaseURI +'/Methode',formData);
  }
  PutMethod(formData){
    return this.http.put(environment.apiBaseURI +'/PaymentDetail',formData.PMId,formData);
  }
}
