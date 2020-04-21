import { Component, OnInit } from '@angular/core';
import { Microservice } from 'src/app/shared/microservice.model';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUpdateMicroserviceComponent } from '../add-update-microservice/add-update-microservice.component';
import { UpdateMicroserviceComponent } from '../update-microservice/update-microservice.component';

@Component({
  selector: 'app-get-delete-microservice',
  templateUrl: './get-delete-microservice.component.html',
  styles: []
})
export class GetDeleteMicroserviceComponent implements OnInit {
  durationInSeconds = 5;

  constructor(private microserviceService: MicroserviceService,private dialog: MatDialog,
    private snackBar: MatSnackBar


  ) { }


  ngOnInit() {
    this.GetMicroservices();

  }
  openComponentForUpdate(){
    const dialogRef = this.dialog.open(UpdateMicroserviceComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });    
    const snack = this.snackBar.open('Snack bar open before dialog');

  dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    if (confirmed) {
      snack.dismiss();
      const a = document.createElement('a');
      a.click();
      a.remove();
      snack.dismiss();
      this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
        duration: 2000,
      });
    }
  });
  
  }
//  this.dialog = this.modalService.show(AddUpdateMethodComponent, {
//   class: 'modal-dialog-centered', ignoreBackdropClick: true

//   };
    
    openComponentForPost(){
      const dialogRef = this.dialog.open(AddUpdateMicroserviceComponent,{
        data:{
          message: 'Are you sure want to delete?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });    
      const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });
      }
    });
    
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
              // this._snackBar.open("La suppression est effectuée avec succées", "X", {
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
 // openComponentForPost() {
       // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    // dialogConfig.data = {
    //     id: 1,
    //     title: 'Angular For Beginners'
    // };

    // this.dialog.open(AddUpdateMethodComponent, dialogConfig);
    // const dialogRef = this.dialog.open(AddUpdateMethodComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //     data => console.log("Dialog output:", data)
    // ); 

  
//    debugger
//    this.microserviceService.initializeFormForPostMicroservice();
//    console.log(this.microserviceService.initializeFormForPostMicroservice())
//     this.dialog = this.modalService.show(AddUpdateMethodComponent, {
//       class: 'modal-dialog-centered', ignoreBackdropClick: true
// });
  
//   }
//   /* #endregion */
//   /* #region  ComponentForUpdate */
//   openComponentForUpdate(microservice: Microservice) {
//     this.microserviceService.initializeFormForUpdateMicroservice(microservice);
//     // this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
//     //   class: 'modal-dialog-centered', ignoreBackdropClick: true
//     // });
//   }
// }

// /* #endregion */

}