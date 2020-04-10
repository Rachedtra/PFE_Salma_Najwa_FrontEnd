import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { Microservice } from 'src/app/shared/microservice.model';

@Component({
  selector: 'app-microservice-list',
  templateUrl: './microservice-list.component.html',
  styles: []
})
export class MicroserviceListComponent implements OnInit {

  constructor(private service: MicroserviceService) { }

  ngOnInit() {
    this.service.refreshlist().subscribe(res =>{
      this.service.list = res as Microservice[]
      console.log(this.service.list);
   });
  }
popularteForm(Microservice:Microservice){
  this.service.formData= Object.assign({},Microservice) ;
}

}
