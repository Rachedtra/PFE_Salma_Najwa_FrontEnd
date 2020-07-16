import { Component, OnInit } from '@angular/core';
import { MethodService } from 'src/app/shared/method.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal/';
import { Method } from 'src/app/shared/method.model';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Microservice } from 'src/app/shared/microservice.model';
import { MicroserviceService } from 'src/app/shared/microservice.service';
@Component({
  selector: 'app-add-update-method',
  templateUrl: './add-update-method.component.html',
  styles: []})
export class AddUpdateMethodComponent implements OnInit {
  formData: Microservice;
  MicroList:[];
  bankAccountForms: FormArray = this.fb.array([]);

    constructor(public bsModalRef: BsModalRef, private MethodService: MethodService, private _snackBar: MatSnackBar,
   private micro :MicroserviceService,private fb: FormBuilder  ) { }

  ngOnInit() {
    this.MethodService.MethodFormAdd_update.markAsUntouched();
    this.micro.getListMicroservice()
    .subscribe(res => this.MicroList = res as []);
}

  
UpdateForm() {
  this.MethodService.updateMethod().subscribe(res => {
    if (res as Method) {
      this.bsModalRef.hide();
      this.MethodService.getListMethod().subscribe(res => {
        this.MethodService.MethodList = res as Method[]
      })
      this._snackBar.open("La modification est effectuée avec succées", "X", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right",
        panelClass: ["green-snackbar"]
      });
    }
  },
    err => {
      console.log(err)
      this._snackBar.open('Erreur', "X", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: "right",
        panelClass: ["red-snackbar"]
      });
    }
  )

}
PostForm() {
  debugger
  this.MethodService.postMethod().subscribe(res => {
    if (res as Method) {
      debugger
      this.bsModalRef.hide();
      this.MethodService.getListMethod().subscribe(res => {
        this.MethodService.MethodList = res as Method[]
      })
      this._snackBar.open("L'ajout est effectué avec succées", "X", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right",
        panelClass: ["green-snackbar"]
      });
    }

  },
    err => {
      console.log(err)
      this._snackBar.open("Erreur", "X", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: "right",
        panelClass: ["red-snackbar"]
      });
    }


  )
}

onSubmit() {
  debugger
  if (
    this.MethodService.MethodFormAdd_update.controls.idMethod.value ==
    "00000000-0000-0000-0000-000000000000"
  ) {
    this.PostForm();

  }
  else {
    this.UpdateForm();
  }
}

}
