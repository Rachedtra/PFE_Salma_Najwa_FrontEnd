import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Domaine } from 'src/app/shared/domaine.model';
@Component({
  selector: 'app-add-update-domain',
  templateUrl: './add-update-domain.component.html',
  styles: []})
export class AddUpdateDomainComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private domainService: DomaineService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.domainService.DomainFormAdd_update.markAsUntouched();
 this.domainService.getDomainList();
  }
  UpdateForm() {
    this.domainService.updateDomain().subscribe(res => {
      if (res as Domaine) {
        this.bsModalRef.hide();
        this.domainService.getDomainList().subscribe(res => {
          this.domainService.DomainList = res as Domaine[]
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
    this.domainService.postDomain().subscribe(res => {
      if (res as Domaine) {
        debugger
        this.bsModalRef.hide();
        this.domainService.getDomainList().subscribe(res => {
          this.domainService.DomainList = res as Domaine[]
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
      this.domainService.DomainFormAdd_update.controls.idDomaine.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}