import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Commentaire } from 'src/app/shared/commentaire.model';

@Component({
  selector: 'app-add-update-commentaire',
  templateUrl: './add-update-commentaire.component.html',
  styles: []
})
export class AddUpdateCommentaireComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private languageService: CommentaireService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.languageService.CommentaireFormAdd_update.markAsUntouched();

  }
  UpdateForm() {
    this.languageService.updateCommentaire().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.languageService.getCommentaireList().subscribe(res => {
          this.languageService.CommentaireList = res as Commentaire[]
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
    this.languageService.postCommentaire().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.languageService.getCommentaireList().subscribe(res => {
          this.languageService.CommentaireList = res as Commentaire[]
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
      this.languageService.CommentaireFormAdd_update.controls.idCom.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}