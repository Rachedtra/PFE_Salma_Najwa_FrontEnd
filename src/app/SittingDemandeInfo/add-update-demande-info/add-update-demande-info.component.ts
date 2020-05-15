import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
@Component({
  selector: 'app-add-update-demande-info',
  templateUrl: './add-update-demande-info.component.html',
  styles: []
})
export class AddUpdateDemandeInfoComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private languageService: DemandeInfoService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.languageService.DemandeInfoFormAdd_update.markAsUntouched();

  }
  UpdateForm() {
    this.languageService.updateDemandeInfo().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.languageService.getDemandeInfoList().subscribe(res => {
          this.languageService.DemandeList = res as DemandeInfo[]
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
    this.languageService.postDemandeInfo().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.languageService.getDemandeInfoList().subscribe(res => {
          this.languageService.DemandeList = res as DemandeInfo[]
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
      this.languageService.DemandeInfoFormAdd_update.controls.idInf.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}