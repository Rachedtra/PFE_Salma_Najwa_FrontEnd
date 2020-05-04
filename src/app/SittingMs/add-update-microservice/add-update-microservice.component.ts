import { Component, OnInit} from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { Microservice } from 'src/app/shared/microservice.model';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal/';
import { Language } from 'src/app/shared/language.model';
import { LanguageService } from 'src/app/shared/language.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-microservice',
  templateUrl: './add-update-microservice.component.html',
  styles: []
})
export class AddUpdateMicroserviceComponent implements OnInit {
  formData: Language;
  LanguageList:[];
  bankAccountForms: FormArray = this.fb.array([]);

    constructor(public bsModalRef: BsModalRef, private MsService: MicroserviceService, private _snackBar: MatSnackBar,
   private language :LanguageService,private fb: FormBuilder  ) { }

  ngOnInit() {
    // this.language.getLanguageList().then
    // (res => this.LanguageList = res as []);
    // this.MsService.MicroserviceFormAdd_update.markAsUntouched();
    //  this.language.getLanguageList().subscribe(res => this.LanguageList = res as Language[]);
    //    this.formData = {
    //     idLanguage: '00000000-0000-0000-0000-000000000000',
    //     label:'',
       
    this.language.getLanguageList()
    .subscribe(res => this.LanguageList = res as []);

  this.MsService.getListMicroservice().subscribe(
    res => {
      if (res == [])
        this.PostForm();
      else {
        //generate formarray as per the data received from BankAccont table
        (res as []).forEach((Microservice: any) => {
          this.bankAccountForms.push(this.fb.group({
            idMS: [Microservice.idMS],
            label: [Microservice.label, Validators.required],
            description: [Microservice.description, Validators.required],
            author: [Microservice.author, Validators.required],
            lien: [Microservice.lien, Validators.required],
            diagClass: [Microservice.diagClass, Validators.required],
            languageFK: [Microservice.languageFK, Validators.min(1)],
          }));
        });
      }
    }
  );
}

  

  UpdateForm() {
    this.MsService.updateMicroservice().subscribe(res => {
      if (res == "Update Done") {
        this.bsModalRef.hide();
        this.MsService.getListMicroservice().subscribe(res => {
          this.MsService.MicroserviceList = res as Microservice[]
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
    this.MsService.postMicroservice().subscribe(res => {
      if (res == "Added done") {
        debugger
        this.bsModalRef.hide();
        this.MsService.getListMicroservice().subscribe(res => {
          this.MsService.MicroserviceList = res as Microservice[]
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
      this.MsService.MicroserviceFormAdd_update.controls.idMS.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostForm();
 
    }
  }

}