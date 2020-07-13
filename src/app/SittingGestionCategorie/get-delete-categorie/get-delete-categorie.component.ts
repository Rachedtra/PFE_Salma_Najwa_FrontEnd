import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GestionCategorieService } from 'src/app/shared/gestion-categorie.service';
import { GestionCategorie } from 'src/app/shared/gestion-categorie.model';
import { AddUpdateCategorieComponent } from '../add-update-categorie/add-update-categorie.component';
@Component({
  selector: 'app-get-delete-categorie',
  templateUrl: './get-delete-categorie.component.html',
  styles: []
})
export class GetDeleteCategorieComponent implements OnInit {

  
  constructor(private gestionCategorie:GestionCategorieService, private modalService: BsModalService, private _snackBar: MatSnackBar


    ) { }
    bsModalRef: BsModalRef;
  
  
    ngOnInit() {
      this.GetCommentaire();
  
  
    }
    /* #region  GetListMethods */
    GetCommentaire() {
      console.log("test");
      this.gestionCategorie.getCategorieList().subscribe(res => {
        this.gestionCategorie.CategorieList = res as GestionCategorie[];
        console.log("test2",res);

      })
    }




// }
    /* #endregion */
    /* #region  Ondelete */
  
    OnDelete(idMethod) {
      debugger
      if (confirm("Vous êtes sûr de vouloir supprimer")) {
        this.gestionCategorie.deleteCategorie(idMethod).subscribe(
          res => {
  
            if (res  as GestionCategorie) {
              debugger
              this.gestionCategorie.getCategorieList().subscribe(res => {
                this.gestionCategorie.CategorieList = res as GestionCategorie[]
            
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
      this.gestionCategorie.initializeFormForPostCommentaire();
      console.log(this.gestionCategorie.initializeFormForPostCommentaire())
  
      this.bsModalRef = this.modalService.show(AddUpdateCategorieComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
  
    /* #endregion */
    /* #region  ComponentForUpdate */
    openComponentForUpdate(microservice: GestionCategorie) {
      this.gestionCategorie.initializeFormForUpdateLanguage(microservice);
      this.bsModalRef = this.modalService.show(AddUpdateCategorieComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
    
  }
  
  /* #endregion */
  
  
