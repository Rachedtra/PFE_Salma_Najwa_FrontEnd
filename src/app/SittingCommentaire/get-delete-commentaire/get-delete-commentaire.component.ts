import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { AddUpdateCommentaireComponent } from '../add-update-commentaire/add-update-commentaire.component';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-delete-commentaire',
  templateUrl: './get-delete-commentaire.component.html',
  styles: []
})
export class GetDeleteCommentaireComponent implements OnInit {

  constructor(private microserviceService: CommentaireService, private modalService: BsModalService, private _snackBar: MatSnackBar


    ) { }
    bsModalRef: BsModalRef;
  
  
    ngOnInit() {
      this.GetMicroservices();
  
  
    }
    /* #region  GetListMethods */
    GetMicroservices() {
      this.microserviceService.getCommentaireList().subscribe(res => {
        this.microserviceService.CommentaireList = res as Commentaire[]
      })
    }
    /* #endregion */
    /* #region  Ondelete */
  
    OnDelete(idMethod) {
      debugger
      if (confirm("Vous êtes sûr de vouloir supprimer")) {
        this.microserviceService.deleteCommentaire(idMethod).subscribe(
          res => {
  
            if (res == "Delete Done") {
              debugger
              this.microserviceService.getCommentaireList().subscribe(res => {
                this.microserviceService.CommentaireList = res as Commentaire[]
                this._snackBar.open("La suppression est effectuée avec succées", "X", {
                  duration: 3000,
                  verticalPosition: "top",
                  horizontalPosition: "right",
                  panelClass: ["green-snackbar"]
                });
              })
  
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
        );
      }
    }
  
    /* #endregion */
  
    /* #region  ComponentForPost */
    openComponentForPost() {
      debugger
      this.microserviceService.initializeFormForPostCommentaire();
      console.log(this.microserviceService.initializeFormForPostCommentaire())
  
      this.bsModalRef = this.modalService.show(AddUpdateCommentaireComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
  
    /* #endregion */
    /* #region  ComponentForUpdate */
    openComponentForUpdate(microservice: Commentaire) {
      this.microserviceService.initializeFormForUpdateLanguage(microservice);
      this.bsModalRef = this.modalService.show(AddUpdateCommentaireComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
    
  }
  
  /* #endregion */
  
  
