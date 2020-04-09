import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-microservice-list',
  templateUrl: './microservice-list.component.html',
  styles: []
})
export class MicroserviceListComponent implements OnInit {

  constructor(private service: MicroserviceService) { }

  ngOnInit() {
    this.service.refreshList();

  }

}
