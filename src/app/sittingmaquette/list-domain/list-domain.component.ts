import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { demandeinfo } from 'src/app/shared/demande-info.model';
import { CommentaireService } from 'src/app/shared/commentaire.service';
@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html',
  styleUrls: ['./list-domain.component.css']
})
export class ListDomainComponent implements OnInit {
  demandeInfo:[];

  constructor(private demandInfo:DemandeInfoService) { }

  ngOnInit() {

    // this.demandInfo.getDemandeInfoList()
    // .subscribe(res => this.demandeInfo = res as []); 
   this.GetAll();
  }
 GetAll()
 {
  console.log("test");
  this.demandInfo.getDemandeInfoList().subscribe(res => {
    this.demandInfo.DemandeList = res as demandeinfo[];
    console.log("test2",res);
   })}
  
}