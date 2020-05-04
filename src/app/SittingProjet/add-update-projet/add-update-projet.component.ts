import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { ProjetService } from 'src/app/shared/projet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projet } from 'src/app/shared/projet.model';

@Component({
  selector: 'app-add-update-projet',
  templateUrl: './add-update-projet.component.html',
  styles: []
})
export class AddUpdateProjetComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private projetService: ProjetService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.projetService.ProjetFormAdd_update.markAsUntouched();

  }
  UpdateForm() {
    this.projetService.updateProjet().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.projetService.getLisProjet().subscribe(res => {
          this.projetService.ProjetList = res as Projet[]
        })
        this._snackBar.open("La modification est effectuée avec succées", "X", {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right",
          panelClass: ["green-snackbar"]
        });
      }
    },
      err => {
        console.log(err)
        this._snackBar.open('Erreur', "X", {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: "right",
          panelClass: ["red-snackbar"]
        });
      }
    )

  }

  PostForm() {
    debugger
    this.projetService.postProjet().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.projetService.getLisProjet().subscribe(res => {
          this.projetService.ProjetList = res as Projet[]
        })
        this._snackBar.open("L'ajout est effectué avec succées", "X", {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right",
          panelClass: ["green-snackbar"]
        });
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


    )
  }

  onSubmit() {
    debugger
    if (
      this.projetService.ProjetFormAdd_update.controls.idProjet.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}