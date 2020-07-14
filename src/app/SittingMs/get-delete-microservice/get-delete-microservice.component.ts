import { Component, OnInit } from '@angular/core';
import { Microservice } from 'src/app/shared/microservice.model';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddUpdateMicroserviceComponent } from '../add-update-microservice/add-update-microservice.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({ 
  selector: 'app-get-delete-microservice',
  templateUrl: './get-delete-microservice.component.html',
  styles: []
})
export class GetDeleteMicroserviceComponent implements OnInit {
  microservice:Microservice[];
 label:string;
  constructor(private microserviceService: MicroserviceService, private modalService: BsModalService, private _snackBar: MatSnackBar


  ) { }
  bsModalRef: BsModalRef;


  ngOnInit() {
    this.GetMicroservices();
  }
  Search(){
    debugger
this.microservice =this.microservice.filter(res=>{
  return res.label.toLocaleLowerCase().match(this.label.toLocaleLowerCase());
})
  }
  /* #region  GetListMethods */
  GetMicroservices() {
    this.microserviceService.getListMicroservice().subscribe(res => {
      this.microserviceService.MicroserviceList = res as Microservice[]
    })
  }
  /* #endregion */
  /* #region  Ondelete */

  OnDelete(idMethod) {
    debugger
    const message = `Are you sure you want to do this?`;

    if (confirm("Vous êtes sûr de mer")) {
      this.microserviceService.deleteMicroservice(idMethod).subscribe(
        res => {

          if (res as Microservice) {
            debugger
            this.microserviceService.getListMicroservice().subscribe(res => {
              this.microserviceService.MicroserviceList = res as Microservice[]
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
    this.microserviceService.initializeFormForPostMicroservice();
    console.log(this.microserviceService.initializeFormForPostMicroservice())

    this.bsModalRef = this.modalService.show(AddUpdateMicroserviceComponent, {
      class: 'modal-dialog-centered', ignoreBackdropClick: true
    });
  }

  /* #endregion */
  /* #region  ComponentForUpdate */
  openComponentForUpdate(microservice: Microservice) {
    this.microserviceService.initializeFormForUpdateMicroservice(microservice);
    this.bsModalRef = this.modalService.show(AddUpdateMicroserviceComponent, {
      class: 'modal-dialog-centered', ignoreBackdropClick: true
    });
  }
  
}

/* #endregion */

