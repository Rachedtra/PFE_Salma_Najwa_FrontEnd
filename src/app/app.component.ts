import { Component } from '@angular/core';
import { userService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateProjet';
  //j:string;
  v : string
  // logi=true;
  // y=false;

  constructor(public loginService : userService){

  }
ontest(){

}
ngOnInit(){
  this.v=localStorage.getItem('t');
  console.log(this.loginService.IsAccess)
  
}
}

