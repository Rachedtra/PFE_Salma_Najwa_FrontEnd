import { Component, OnInit } from '@angular/core';
import { DemandeInfo } from 'src/app/shared/demande-info.model';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-micro-list',
  templateUrl: './micro-list.component.html',
  styleUrls: ['./micro-list.component.css']
})
export class MicroListComponent implements OnInit {
  DemandList:[]
  constructor(private microList:MicroserviceService) { }

  ngOnInit() {
    this.microList.getListMicroservice()
    .subscribe(res => this.DemandList = res as []);

  }

}