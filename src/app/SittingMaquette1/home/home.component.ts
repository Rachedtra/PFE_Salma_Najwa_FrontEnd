import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { Commentaire } from 'src/app/shared/commentaire.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { GestionCategorieService } from 'src/app/shared/gestion-categorie.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CategorieList:[];
  DomainList:[];
  DemandeList: DemandeInfo[];

  constructor(private fb: FormBuilder,private DomaineService:DomaineService,private _snackBar: MatSnackBar,private demandeInfo:DemandeInfoService,private categorieService:GestionCategorieService,private commentaireService:CommentaireService) { }

  ngOnInit() {
    this.categorieService.getCategorieList()
    .subscribe(res => this.CategorieList = res as []); 
    this.DomaineService.getDomainList()
    .subscribe(res => this.DomainList = res as []);
    this.demandeInfo.DemandeInfoFormAdd_update.markAsUntouched();

    }

  
  VersionFormAdd_update = this.fb.group({
    titre: ['', Validators.required],
    categorie: ['', Validators.required],
    domaine: ['', Validators.required],
    description: ['', Validators.required],


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostMicroservice() {
    this.VersionFormAdd_update.setValue({
      titre: '',
    


    })
  }
//   addNewEvent() {
//     const newEvent: any = {
//       titre: this.titre.value,
//       domaine: this.domaine.value,
//       categorie: this.categorie.value,
//       description: this.descriptionInput.value
//     };
  
//     this.events.push(newEvent);
  
//     this.timeInput.setValue('');
//     this.subjectInput.setValue('');
//     this.locationInput.setValue('');
//     this.descriptionInput.setValue('');
  
//     this.modal.hide();
//   }
// }
changementDePage = function () {
  this.router.navigate(['http://localhost:4200/answer']);
};
}
