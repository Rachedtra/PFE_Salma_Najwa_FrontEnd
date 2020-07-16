import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MethodService } from 'src/app/shared/method.service';
import { Method } from 'src/app/shared/method.model';
import { AddUpdateMethodComponent } from '../add-update-method/add-update-method.component';

@Component({
  selector: 'app-get-delete-method',
  templateUrl: './get-delete-method.component.html',
  styles: []
})
export class GetDeleteMethodComponent implements OnInit {

  constructor(private modalService: BsModalService,private methodService:MethodService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getMethod();
    }
    getMethod() {
      this.methodService.getListMethod().subscribe(res => {
        this.methodService.MethodList = res as Method[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.methodService.deleteMethod(idMethod).subscribe(
            res => {
    
              if (res as Method) {
                debugger
                this.methodService.getListMethod().subscribe(res => {
                  this.methodService.MethodList = res as Method[]
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
        this.methodService.initializeFormForPostMethod();
        console.log(this.methodService.initializeFormForPostMethod())
    
        this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(method:Method) {
        this.methodService.initializeFormForUpdateMethod(method);
        this.bsModalRef = this.modalService.show(AddUpdateMethodComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }
    

