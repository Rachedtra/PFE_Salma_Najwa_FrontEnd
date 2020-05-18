import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SousCategorieService } from 'src/app/shared/sous-categorie.service';
import { SousCategorie } from 'src/app/shared/sous-categorie.model';
import { GestionCategorieService } from 'src/app/shared/gestion-categorie.service';

@Component({
  selector: 'app-add-update-sous-categorie',
  templateUrl: './add-update-sous-categorie.component.html',
  styles:[]
})
export class AddUpdateSousCategorieComponent implements OnInit {
  CategorieList:[];

  constructor(public bsModalRef: BsModalRef, private sousCategorieService: SousCategorieService, private _snackBar: MatSnackBar,private categorie:GestionCategorieService) { }

  ngOnInit() {
 this.sousCategorieService.CommentaireFormAdd_update.markAsUntouched();
 this.categorie.getCategorieList()
 .subscribe(res => this.CategorieList= res as []);
  }
  UpdateForm() {
    this.sousCategorieService.updateCommentaire().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.sousCategorieService.getCommentaireList().subscribe(res => {
          this.sousCategorieService.SousCategorieList = res as SousCategorie[]
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
    this.sousCategorieService.postCommentaire().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.sousCategorieService.getCommentaireList().subscribe(res => {
          this.sousCategorieService.SousCategorieList = res as SousCategorie[]
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
      this.sousCategorieService.CommentaireFormAdd_update.controls.idSC.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}