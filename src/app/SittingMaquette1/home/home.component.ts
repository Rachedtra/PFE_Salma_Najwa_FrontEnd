import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { GestionCategorieService } from 'src/app/shared/gestion-categorie.service';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GestionCategorie } from 'src/app/shared/gestion-categorie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CategorieList: GestionCategorie[]

 

  constructor(private fb: FormBuilder,private DomaineService:DomaineService,private _snackBar: MatSnackBar,private demandeInfo:DemandeInfoService,private categorieService:GestionCategorieService,private commentaireService:CommentaireService) { }

  ngOnInit() {
    this.categorieService.getCategorieList()
    .subscribe(res => this.CategorieList = res as GestionCategorie[]); 
    // this.DomaineService.getDomainList()
    // .subscribe(res => this.DomainList = res as []);
    // this.demandeInfo.DemandeInfoFormAdd_update.markAsUntouched();
    this.GetDemandeInfo();

    }

  // addNewEvent() {
  //   const newEvent: any = {
  //     titre: this.timeInput.value,
  //     domaine: this.subjectInput.value,
  //    categorie: this.locationInput.value,
  //     description: this.descriptionInput.value
  //   };
  
  //   this.DemandeList.push(newEvent);
  
  //   this.timeInput.setValue('');
  //   this.subjectInput.setValue('');
  //   this.locationInput.setValue('');
  //   this.descriptionInput.setValue('');
  
  //   this.modal.hide();
  // }
  // onSubmitForm() {
  // }

  GetDemandeInfo() {
    debugger
    this.demandeInfo.getDemandeInfoList().subscribe(res => {
      this.demandeInfo.DemandeList = res as DemandeInfo[];
  })
} 

// PostForm() {
//   debugger
//   this.demandeInfo.postDemandeInfo().subscribe(res => {
//     if (res == "Added done") {
//       debugger
//       this.demandeInfo.getDemandeInfoList().subscribe(res => {
//         this.demandeInfo.DemandeList = res as DemandeInfo[]
//       })
//       this._snackBar.open("L'ajout est effectué avec succées", "X", {
//         duration: 3000,
//         verticalPosition: "top",
//         horizontalPosition: "right",
//         panelClass: ["green-snackbar"]
//       });
//     }

//   },
//     err => {
//       console.log(err)
//       this._snackBar.open("Erreur", "X", {
//         duration: 3000,
//         verticalPosition: 'top',
//         horizontalPosition: "right",
//         panelClass: ["red-snackbar"]
//       });
//     }


//   )
// }

// onSubmit() {
//   debugger
//   if (
//     this.demandeInfo.DemandeInfoFormAdd_update.controls.idInf.value ==
//     "00000000-0000-0000-0000-000000000000"
//   ) {
//     this.PostForm();
//   }
//    else {
//     this.PostForm();
//   }
// }

}
