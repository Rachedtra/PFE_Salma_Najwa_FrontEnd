import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/shared/projet.service';
import { Projet } from 'src/app/shared/projet.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUpdateProjetComponent } from '../add-update-projet/add-update-projet.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-get-delete-projet',
  templateUrl: './get-delete-projet.component.html',
  styles: []
})
export class GetDeleteProjetComponent implements OnInit {
  constructor(private modalService: BsModalService,private projetService:ProjetService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getProjet();
    }
    getProjet() {
      this.projetService.getLisProjet().subscribe(res => {
        this.projetService.ProjetList = res as Projet[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.projetService.deleteProjet(idMethod).subscribe(
            res => {
    
              if (res == "Delete Done") {
                debugger
                this.projetService.getLisProjet().subscribe(res => {
                  this.projetService.ProjetList = res as Projet[]
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
      openComponentForPost() {
        debugger
        this.projetService.initializeFormForPostMicroservice();
        console.log(this.projetService.initializeFormForPostMicroservice())
    
        this.bsModalRef = this.modalService.show(AddUpdateProjetComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(projet:Projet) {
        this.projetService.initializeFormForUpdateMicroservice(projet);
        this.bsModalRef = this.modalService.show(AddUpdateProjetComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }
    