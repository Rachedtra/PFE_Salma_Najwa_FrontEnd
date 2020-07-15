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

this.categorie.getCategorieList()
 .subscribe(res => this.CategorieList = res as []);
  }
  UpdateForm() {
    this.sousCategorieService.updateSousCategorie().subscribe(res => {
      if (res as SousCategorie){
        this.bsModalRef.hide();
        this.sousCategorieService.getSousCategorieList().subscribe(res => {
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
    this.sousCategorieService.postSousCategorie().subscribe(res => {
      if (res as SousCategorie) {
        debugger
        this.bsModalRef.hide();
        this.sousCategorieService.getSousCategorieList().subscribe(res => {
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
    console.log('test1')
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