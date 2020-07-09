import { Component, OnInit } from '@angular/core';
import { DemandeInfoService } from 'src/app/shared/demande-info.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

 
DemandList:[]
  constructor(private demandeQuestion:DemandeInfoService) { }

  ngOnInit() {
    this.demandeQuestion.getDemandeInfoList()
    .subscribe(res => this.DemandList = res as []);

  }

}

