import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { DemandeInfo } from 'src/app/shared/demande-info.model';

@Component({
  selector: 'app-list-domain',
  templateUrl: './list-domain.component.html',
  styleUrls: ['./list-domain.component.css']
})
export class ListDomainComponent implements OnInit {
  DomainList:[];
  demandInfos:any;
  currentTutorial = null;
  message = '';
  idDomain = '00000000-0000-0000-0000-000000000000';

  constructor(private domaineService:DomaineService,private demandInfo:DemandeInfoService) { }

  ngOnInit() {
 this.getUser();
  }
// save(domainForm):void{
// console.log(domainForm.value);
// }
fetchId = "00000000-0000-0000-0000-000000000000";

getUser() {
  debugger
  // this.domaineService.getDomainById(this.fetchId).subscribe(data => {
  //   this.Domaine = data;
  //  this.displayData= true;
  console.log("test");
  this.demandInfo.getDemandeInfoList().subscribe(res => {
    this.demandInfo.DemandeList = res as DemandeInfo[];
    console.log("test2",res);})
  }
  // onClick(event) {
  //   var target = event.target || event.srcElement || event.currentTarget;
  //   var idAttr = target.attributes.idDomain;
  //   var value = idAttr.nodeValue;
  // }
  GetDemandeInfo(id) {
    this.demandInfo.get(id)
    .subscribe(
      data => {
        this.currentTutorial = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
 
}