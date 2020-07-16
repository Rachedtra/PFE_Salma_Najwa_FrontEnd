import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class userService {
  listuser :user[]

  constructor(private _httpClient: HttpClient, private router:Router) { }
  IsAccess : string ;

  getUsers(){
    return this._httpClient.get(environment.login+"user") ;
  }
  public getLogin(user){
    return this._httpClient.get<user>(environment.login+"/Users/Login?login="+user.login+"&password="+user.password);
  }

  public loggedIn(){
    return !!localStorage.getItem('token');
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

  public getToken(){
    return localStorage.getItem('token');
  }

}
