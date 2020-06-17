import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { CommentaireService } from 'src/app/shared/commentaire.service';

@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html',
  styleUrls: ['./style.css']
})
export class ListDomainComponent implements OnInit {
  demandeInfo:[];

  constructor(private commentaireService:CommentaireService,private demandInfo:DemandeInfoService) { }

  ngOnInit() {
    this.demandInfo.DemandeInfoFormAdd_update.markAsUntouched();

    this.demandInfo.getDemandeInfoList()
    .subscribe(res => this.demandeInfo = res as []); 
   
  }
  GetAll()
  {
    this.demandInfo.getDemandeInfoList().subscribe(res => {
      this.demandInfo.DemandeList = res as DemandeInfo[]
    })}
  
}

