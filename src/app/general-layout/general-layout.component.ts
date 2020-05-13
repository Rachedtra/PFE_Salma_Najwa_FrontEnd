import { Component, OnInit } from '@angular/core';
import { Microservice } from '../shared/microservice.model';
import { MicroserviceService } from '../shared/microservice.service';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styles: []
})
export class GeneralLayoutComponent implements OnInit {
  MicroserviceList:Microservice[]=[];
  search:string;

  constructor(private service:MicroserviceService) { }

  ngOnInit() {
    this.MicroserviceList =[];
this.GetMicroservices();
  }
  // Search(){
  //   if(this.search !=""){
  //     this.MicroserviceList=this.MicroserviceList.filter(res=>{
  //       return res.label.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
  //     });
  //   }else if (this.search==""){
  //     this.ngOnInit();
  //   }
    GetMicroservices() {
      this.service.getListMicroservice().subscribe(res => {
        this.service.MicroserviceList = res as Microservice[]
      })
    }
  }

