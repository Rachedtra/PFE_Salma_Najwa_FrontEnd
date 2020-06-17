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
import { ListDomainComponent } from '../list-domain/list-domain.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 

  constructor() { }

  ngOnInit() {
    }
}
