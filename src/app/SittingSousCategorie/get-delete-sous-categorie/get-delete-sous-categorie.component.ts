import { Component, OnInit, Pipe } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SousCategorieService } from 'src/app/shared/sous-categorie.service';
import { SousCategorie } from 'src/app/shared/sous-categorie.model';
import { AddUpdateSousCategorieComponent } from '../add-update-sous-categorie/add-update-sous-categorie.component';
@Pipe({
  name: 'filterPipe'})
@Component({
  selector: 'app-get-delete-sous-categorie',
  templateUrl: './get-delete-sous-categorie.component.html',
  styles: []
  

})
export class GetDeleteSousCategorieComponent implements OnInit {

  
  constructor(private sousCategorie:SousCategorieService, private modalService: BsModalService, private _snackBar: MatSnackBar


    ) { }
    bsModalRef: BsModalRef;
  
  
   
    ngOnInit() {
      this.getSousCategorie();
        }
        getSousCategorie() {
          this.sousCategorie.getSousCategorieList().subscribe(res => {
            this.sousCategorie.SousCategorieList = res as SousCategorie[]
          })}
          OnDelete(idMethod) {
            debugger
            if (confirm("Vous êtes sûr de vouloir supprimer")) {
              this.sousCategorie.deleteSousCategorie(idMethod).subscribe(
                res => {
        
                  if (res == "Delete Done") {
                    debugger
                    this.sousCategorie.getSousCategorieList().subscribe(res => {
                      this.sousCategorie.SousCategorieList = res as SousCategorie[]
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
  
    /* #region  ComponentForPost */
    openComponentForPost() {
      console.log('test ')
      this.sousCategorie.initializeFormForPostCommentaire();
      console.log(this.sousCategorie.initializeFormForPostCommentaire())
  
      this.bsModalRef = this.modalService.show(AddUpdateSousCategorieComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
    openComponentForUpdate(sousCategorie:SousCategorie) {
      this.sousCategorie.initializeFormForUpdateSousCategorie(sousCategorie);
      this.bsModalRef = this.modalService.show(AddUpdateSousCategorieComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
}
  