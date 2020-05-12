import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Domaine } from 'src/app/shared/domaine.model';
import { AddUpdateDomainComponent } from '../add-update-domain/add-update-domain.component';
@Component({
  selector: 'app-get-delete-domain',
  templateUrl: './get-delete-domain.component.html',
  styles: []
})
export class GetDeleteDomainComponent implements OnInit {
  constructor(private modalService: BsModalService,private domainService:DomaineService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getProjet();
    }
    getProjet() {
      this.domainService.getDomainList().subscribe(res => {
        this.domainService.DomainList = res as Domaine[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.domainService.deleteDomain(idMethod).subscribe(
            res => {
    
              if (res == "Delete Done") {
                debugger
                this.domainService.getDomainList().subscribe(res => {
                  this.domainService.DomainList = res as Domaine[]
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
        this.domainService.initializeFormForPostDomain();
        console.log(this.domainService.initializeFormForPostDomain())
    
        this.bsModalRef = this.modalService.show(AddUpdateDomainComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(domain:Domaine) {
        this.domainService.initializeFormForUpdateMicroservice(domain);
        this.bsModalRef = this.modalService.show(AddUpdateDomainComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }
    