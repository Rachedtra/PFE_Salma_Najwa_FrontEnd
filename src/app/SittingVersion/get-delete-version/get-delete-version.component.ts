import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VersionService } from 'src/app/shared/version.service';
import { Version } from 'src/app/shared/version.model';
import { AddUpdateVersionComponent } from '../add-update-version/add-update-version.component';

@Component({
  selector: 'app-get-delete-version',
  templateUrl: './get-delete-version.component.html',
  styles: []})
export class GetDeleteVersionComponent implements OnInit {

  constructor(private modalService: BsModalService,private versionService:VersionService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getProjet();
    }
    getProjet() {
      this.versionService.getListVersion().subscribe(res => {
        this.versionService.VersionList = res as Version[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.versionService.deleteVersion(idMethod).subscribe(
            res => {
    
              if (res as Version) {
                debugger
                this.versionService.getListVersion().subscribe(res => {
                  this.versionService.VersionList = res as Version[]
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
        this.versionService.initializeFormForPostMicroservice();
        console.log(this.versionService.initializeFormForPostMicroservice())
    
        this.bsModalRef = this.modalService.show(AddUpdateVersionComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(version:Version) {
        this.versionService.initializeFormForUpdateVersion(version);
        this.bsModalRef = this.modalService.show(AddUpdateVersionComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }
    

