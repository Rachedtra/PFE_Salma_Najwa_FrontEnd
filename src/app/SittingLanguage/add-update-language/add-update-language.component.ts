import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/shared/language.service';
import { Language } from 'src/app/shared/language.model';
@Component({
  selector: 'app-add-update-language',
  templateUrl: './add-update-language.component.html',
  styles: []})
export class AddUpdateLanguageComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private languageService: LanguageService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
 this.languageService.LanguageFormAdd_update.markAsUntouched();
 this.languageService.getLanguageList();
  }
  UpdateForm() {
    this.languageService.updateLanguage().subscribe(res => {
      if (res as Language) {
        this.bsModalRef.hide();
        this.languageService.getLanguageList().subscribe(res => {
          this.languageService.LanguageList = res as Language[]
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
    this.languageService.postLanguage().subscribe(res => {
      if (res as Language) {
        debugger
        this.bsModalRef.hide();
        this.languageService.getLanguageList().subscribe(res => {
          this.languageService.LanguageList = res as Language[]
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
      this.languageService.LanguageFormAdd_update.controls.idLanguage.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
    }
     else {
      this.UpdateForm();
    }
  }

}