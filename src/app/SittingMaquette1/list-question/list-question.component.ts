import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  DemandList:[]
  constructor(private microList:MicroserviceService) { }

  ngOnInit() {
    this.microList.getListMicroservice()
    .subscribe(res => this.DemandList = res as []);

  }

}
