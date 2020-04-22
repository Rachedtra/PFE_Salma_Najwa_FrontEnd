import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { Microservice } from 'src/app/shared/microservice.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-add-update-microservice',
  templateUrl: './add-update-microservice.component.html',
  styles: []
})
export class AddUpdateMicroserviceComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private MsService: MicroserviceService, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.MsService.MicroserviceFormAdd_update.markAsUntouched();

  }

  UpdateForm() {
    this.MsService.updateMicroservice().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.MsService.getListMicroservice().subscribe(res => {
          this.MsService.MicroserviceList = res as Microservice[]
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
    this.MsService.postMicroservice().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.MsService.getListMicroservice().subscribe(res => {
          this.MsService.MicroserviceList = res as Microservice[]
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
      this.MsService.MicroserviceFormAdd_update.controls.idMS.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    } else {
      this.UpdateForm();
    }
  }

}