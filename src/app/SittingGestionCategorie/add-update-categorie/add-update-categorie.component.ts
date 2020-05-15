import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GestionCategorieService } from 'src/app/shared/gestion-categorie.service';
import { GestionCategorie } from 'src/app/shared/gestion-categorie.model';
@Component({
  selector: 'app-add-update-categorie',
  templateUrl: './add-update-categorie.component.html',
  styles: []
})
export class AddUpdateCategorieComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private languageService: GestionCategorieService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.languageService.CommentaireFormAdd_update.markAsUntouched();

  }
  UpdateForm() {
    this.languageService.updateCategorie().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.languageService.getCategorieList().subscribe(res => {
          this.languageService.CategorieList = res as GestionCategorie[]
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
    this.languageService.postCategorie().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.languageService.getCategorieList().subscribe(res => {
          this.languageService.CategorieList = res as GestionCategorie[]
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
      this.languageService.CommentaireFormAdd_update.controls.idCategorie.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}