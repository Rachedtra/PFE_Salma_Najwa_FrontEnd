import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LanguageService } from 'src/app/shared/language.service';
import { Language } from 'src/app/shared/language.model';
import { AddUpdateLanguageComponent } from '../add-update-language/add-update-language.component';

@Component({
  selector: 'app-get-delete-language',
  templateUrl: './get-delete-language.component.html',
  styles: []})
export class GetDeleteLanguageComponent implements OnInit {
  constructor(private modalService: BsModalService,private languageService:LanguageService,private _snackBar: MatSnackBar) { }
  
  bsModalRef: BsModalRef;

    ngOnInit() {
  this.getProjet();
    }
    getProjet() {
      this.languageService.getLanguageList().subscribe(res => {
        this.languageService.LanguageList = res as Language[]
      })}
      OnDelete(idMethod) {
        debugger
        if (confirm("Vous êtes sûr de vouloir supprimer")) {
          this.languageService.deleteMicroservice(idMethod).subscribe(
            res => {
    
              if (res == "Delete Done") {
                debugger
                this.languageService.getLanguageList().subscribe(res => {
                  this.languageService.LanguageList = res as Language[]
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
        this.languageService.initializeFormForPostLanguage();
        console.log(this.languageService.initializeFormForPostLanguage())
    
        this.bsModalRef = this.modalService.show(AddUpdateLanguageComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
      openComponentForUpdate(language:Language) {
        this.languageService.initializeFormForUpdateLanguage(language);
        this.bsModalRef = this.modalService.show(AddUpdateLanguageComponent, {
          class: 'modal-dialog-centered', ignoreBackdropClick: true
        });
      }
  }
    
