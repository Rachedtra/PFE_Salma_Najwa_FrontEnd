import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';

@Component({
  selector: 'app-add-update-commentaire',
  templateUrl: './add-update-commentaire.component.html',
  styles: []
})
export class AddUpdateCommentaireComponent implements OnInit {
demandInfo:[]
  constructor(private demand:DemandeInfoService,public bsModalRef: BsModalRef, private commentaitreService: CommentaireService, private _snackBar: MatSnackBar) { }

  ngOnInit() 
  {
    this.commentaitreService.CommentaireFormAdd_update.markAsUntouched();

    this.demand.getDemandeInfoList()
    .subscribe(res => this.demandInfo = res as []);
 this.commentaitreService.CommentaireFormAdd_update.markAsUntouched();
this.commentaitreService.GetListCommentaire();

  }




  UpdateForm() {
    this.commentaitreService.updateCommentaire().subscribe(res => {
      if (res as Commentaire) {
        this.bsModalRef.hide();
        this.commentaitreService.GetListCommentaire().subscribe(res => {
          this.commentaitreService.CommentaireList = res as Commentaire[]
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
    this.commentaitreService.postCommentaire().subscribe(res => {
      if (res as Commentaire) {
        debugger
        this.bsModalRef.hide();
        this.commentaitreService.GetListCommentaire().subscribe(res => {
          this.commentaitreService.CommentaireList = res as Commentaire[]
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
      this.commentaitreService.CommentaireFormAdd_update.controls.idCom.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}