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

    constructor(public bsModalRef: BsModalRef, private MsService: MethodService, private _snackBar: MatSnackBar,
   private language :MicroserviceService,private fb: FormBuilder  ) { }

  ngOnInit() {
    
    this.language.getListMicroservice()
    .subscribe(res => this.MicroList = res as []);

  this.MsService.getListMethod().subscribe(
    res => {
      if (res == [])
        this.PostForm();
      else {
        //generate formarray as per the data received from BankAccont table
        (res as []).forEach((Method: any) => {
          this.bankAccountForms.push(this.fb.group({
            idMethod: [Method.idMethod],
            nom: [Method.nom, Validators.required],
            description: [Method.description, Validators.required],
            input: [Method.input, Validators.required],
            output: [Method.output, Validators.required],
            fk_Microservice: [Method.fk_Microservice, Validators.min(1)],
          }));
        });
      }
    }
  );
}

  
UpdateForm() {
  this.MsService.updateMethod().subscribe(res => {
    if (res == "Update Done") {
      this.bsModalRef.hide();
      this.MsService.getListMethod().subscribe(res => {
        this.MsService.MethodList = res as Method[]
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
  this.MsService.postMethod().subscribe(res => {
    if (res == "Added done") {
      debugger
      this.bsModalRef.hide();
      this.MsService.getListMethod().subscribe(res => {
        this.MsService.MethodList = res as Method[]
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
    this.MsService.MethodFormAdd_update.controls.idMethod.value ==
    "00000000-0000-0000-0000-000000000000"
  ) {
    this.PostForm();

  }
  else {
    this.UpdateForm();
  }
}

}
