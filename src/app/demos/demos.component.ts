import { Component, OnInit } from '@angular/core';
import { DemoService } from '../shared/demo.service';
import { Demo } from '../shared/demo.model';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styles: []
})
export class DemosComponent implements OnInit {

  constructor(private DemoService: DemoService) { }
  
  
    ngOnInit() {
      this.GetMicroservices();
  
    }
    GetMicroservices() {
      this.DemoService.getdemo().subscribe(res => {
        this.DemoService.liste = res as Demo[]
      })
    }
    /* #endregion */
    /* #region  Ondelete */
  
    OnDelete(id) {
      
      if (confirm("Vous êtes sûr de vouloir supprimer")) {
        this.DemoService.deletedemo(id).subscribe(
          res => {
  
            if (res == "Delete Done") {
              
              this.DemoService.getdemo().subscribe(res => {
                this.DemoService.liste = res as Demo[]
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
      this.DemoService.initializePostdemo();
      console.log(this.DemoService.initializePostdemo())  
     
      // this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
      //   class: 'modal-dialog-centered', ignoreBackdropClick: true
      // });
    }
  
    /* #endregion */
    /* #region  ComponentForUpdate */
    openComponentForUpdate(demo: Demo) {
      this.DemoService.initializeUpdatedemo(demo);
      // this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
      //   class: 'modal-dialog-centered', ignoreBackdropClick: true
      // });
    }
  }