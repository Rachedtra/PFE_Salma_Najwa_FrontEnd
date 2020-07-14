import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VersionService } from 'src/app/shared/version.service';
import { Version } from 'src/app/shared/version.model';
@Component({
  selector: 'app-add-update-version',
  templateUrl: './add-update-version.component.html',
  styles: []})
export class AddUpdateVersionComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private versionService: VersionService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.versionService.VersionFormAdd_update.markAsUntouched();
 this.versionService.getListVersion();
  }
  UpdateForm() {
    this.versionService.updateVersion().subscribe(res => {
      if (res as Version) {
        this.bsModalRef.hide();
        this.versionService.getListVersion().subscribe(res => {
          this.versionService.VersionList = res as Version[]
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
    this.versionService.postVersion().subscribe(res => {
      if (res as Version) {
        debugger
        this.bsModalRef.hide();
        this.versionService.getListVersion().subscribe(res => {
          this.versionService.VersionList = res as Version[]
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
      this.versionService.VersionFormAdd_update.controls.iDversion.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}