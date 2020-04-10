import { Component, OnInit } from '@angular/core';
import { Microservice } from 'src/app/shared/microservice.model';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-get-delete-microservice',
  templateUrl: './get-delete-microservice.component.html',
  styles: []
})
export class GetDeleteMicroserviceComponent implements OnInit {

  constructor(private microserviceService: MicroserviceService


  ) { }


  ngOnInit() {
    this.GetMicroservices();

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
    if (confirm("Vous êtes sûr de vouloir supprimer")) {
      this.microserviceService.deleteMicroservice(idMethod).subscribe(
        res => {

          if (res == "Delete Done") {
            debugger
            this.microserviceService.getListMicroservice().subscribe(res => {
              this.microserviceService.MicroserviceList = res as Microservice[]
              //this._snackBar.open("La suppression est effectuée avec succées", "X", {
              // duration: 3000,
              // verticalPosition: "top",
              // horizontalPosition: "right",
              // panelClass: ["green-snackbar"]
              // });
            })

          }
        },
        // err => {
        //   console.log(err)
        //   this._snackBar.open("Erreur", "X", {
        //     duration: 3000,
        //     verticalPosition: 'top',
        //     horizontalPosition: "right",
        //     panelClass: ["red-snackbar"]
        //   });
        // }
      );
    }
  }

  /* #endregion */

  /* #region  ComponentForPost */
  openComponentForPost() {
    debugger
    this.microserviceService.initializeFormForPostMicroservice();
    console.log(this.microserviceService.initializeFormForPostMicroservice())

    // this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
    //   class: 'modal-dialog-centered', ignoreBackdropClick: true
    // });
  }

  /* #endregion */
  /* #region  ComponentForUpdate */
  openComponentForUpdate(microservice: Microservice) {
    this.microserviceService.initializeFormForUpdateMicroservice(microservice);
    // this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
    //   class: 'modal-dialog-centered', ignoreBackdropClick: true
    // });
  }
}

/* #endregion */

