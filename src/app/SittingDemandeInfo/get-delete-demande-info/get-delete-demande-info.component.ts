import { Component, OnInit } from '@angular/core';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUpdateDemandeInfoComponent } from '../add-update-demande-info/add-update-demande-info.component';
import { demandeinfo } from 'src/app/shared/demande-info.model';

@Component({
  selector: 'app-get-delete-demande-info',
  templateUrl: './get-delete-demande-info.component.html',
  styles: []
})
export class GetDeleteDemandeInfoComponent implements OnInit {

  constructor(private demandeInfoService: DemandeInfoService, private modalService: BsModalService, private _snackBar: MatSnackBar


    ) { }
    bsModalRef: BsModalRef;
  
  
    ngOnInit() {
      this.GetDemandeInfo();
  
  
    }
    /* #region  GetListMethods */
    GetDemandeInfo() {
      console.log("test");
      this.demandeInfoService.getDemandeInfoList().subscribe(res => {
        this.demandeInfoService.DemandeList = res as demandeinfo[];
        console.log("test2",res);
    })
  }
    /* #endregion */
    /* #region  Ondelete */
  
    OnDelete(idMethod) {
      debugger
      if (confirm("Vous êtes sûr de vouloir supprimer")) {
        this.demandeInfoService.deleteDemandeInfo(idMethod).subscribe(
          res => {
  
            if (res == "Delete Done") {
              debugger
              this.demandeInfoService.getDemandeInfoList().subscribe(res => {
                this.demandeInfoService.DemandeList = res as demandeinfo[]
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
      this.demandeInfoService.initializeFormForPostDemandeInfo();
      console.log(this.demandeInfoService.initializeFormForPostDemandeInfo())
  
      this.bsModalRef = this.modalService.show(AddUpdateDemandeInfoComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
  
    /* #endregion */
    /* #region  ComponentForUpdate */
    openComponentForUpdate(microservice: demandeinfo) {
      this.demandeInfoService.initializeFormForUpdateDemandeInfo(microservice);
      this.bsModalRef = this.modalService.show(AddUpdateDemandeInfoComponent, {
        class: 'modal-dialog-centered', ignoreBackdropClick: true
      });
    }
    
  }
  
  /* #endregion */