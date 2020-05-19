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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();
  CategorieList:[];
  DomainList:[];
  DemandeList: DemandeInfo[];
  userForm: FormGroup;

  constructor(private fb: FormBuilder,private DomaineService:DomaineService,private _snackBar: MatSnackBar,private demandeInfo:DemandeInfoService,private categorieService:GestionCategorieService,private commentaireService:CommentaireService) { }

  ngOnInit() {
    this.categorieService.getCategorieList()
    .subscribe(res => this.CategorieList = res as []); 
    this.DomaineService.getDomainList()
    .subscribe(res => this.DomainList = res as []);
    this.demandeInfo.DemandeInfoFormAdd_update.markAsUntouched();

    }

  addNewEvent() {
    const newEvent: any = {
      titre: this.timeInput.value,
      domaine: this.subjectInput.value,
     categorie: this.locationInput.value,
      description: this.descriptionInput.value
    };
  
    this.DemandeList.push(newEvent);
  
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
  
    this.modal.hide();
  }
  onSubmitForm() {
  }



}
