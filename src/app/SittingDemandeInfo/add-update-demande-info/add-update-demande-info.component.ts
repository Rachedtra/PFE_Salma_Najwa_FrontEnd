import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { demandeinfo } from 'src/app/shared/demande-info.model';
import { DomaineService } from 'src/app/shared/domaine.service';
@Component({
  selector: 'app-add-update-demande-info',
  templateUrl: './add-update-demande-info.component.html',
  styles: []
})
export class AddUpdateDemandeInfoComponent implements OnInit {
  DomainList:[];

  constructor(private domaineService:DomaineService,public bsModalRef: BsModalRef, private demandInfoService: DemandeInfoService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.demandInfoService.DemandeInfoFormAdd_update.markAsUntouched();

  }
  UpdateForm() {
    this.demandInfoService.updateDemandeInfo().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.demandInfoService.getDemandeInfoList().subscribe(res => {
          this.demandInfoService.DemandeList = res as demandeinfo[]
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
    this.demandInfoService.postDemandeInfo().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.demandInfoService.getDemandeInfoList().subscribe(res => {
          this.demandInfoService.DemandeList = res as demandeinfo[]
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
      this.demandInfoService.DemandeInfoFormAdd_update.controls.idInf.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}