import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { userService } from '../shared/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private userService:userService, private router: Router ,  private _snack:MatSnackBar) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })

    // this.userService.IsAccess = 'false';
  }


  loginHandler(){
    debugger
    this.userService.getLogin(this.loginForm.value).subscribe(res=>{

      this._snack.open("Bienvenue " +res.firstName +" "+res.lastName,'X',{
        verticalPosition: 'bottom',
        duration: 2000,
        panelClass:'snack-succ'
      });
      localStorage.setItem('token',res.token)
      localStorage.setItem('labelRole',res.labelRole)
      localStorage.setItem('labelFiliale',res.labelFiliale)
      localStorage.setItem('firstName',res.firstName)
      localStorage.setItem('lastName',res.lastName)
      localStorage.setItem('t', 'true');
      this.userService.IsAccess = 'true';
      console.log(localStorage.getItem('t'))
      if(localStorage.getItem('labelRole')=='chef projet'){
        this.router.navigate(['/'])
      }else{
        this.router.navigate(['/Home'])
      }
      
    },err=>{
      //not found 
      if(err.status === 404){
        this._snack.open("Utilisateur inexistant !!")
        
      }else{
        this._snack.open("Erreur au niveau du serveur !!")
      }
      
    })
  }

}

