import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { userService } from 'src/app/shared/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeComponent } from 'src/app/SittingMaquette1/home/home.component';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styles: []
})
export class HeaderNavbarComponent implements OnInit {
  bsModalRef: BsModalRef;

  public loginForm:FormGroup;
  constructor(private dialog:MatDialog,public userService:userService,private _snack:MatSnackBar) { }

  ngOnInit() {
  }
 

  logOut(){
    this.userService.logout()
      this._snack.open("Vous êtes déconnecté",'X',{
        verticalPosition: 'bottom',
        duration: 3000,
        panelClass:'snack-red'
      } )
      this.userService.IsAccess = 'false';
  
}
}


