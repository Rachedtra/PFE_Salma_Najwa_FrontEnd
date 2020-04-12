import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/demo.service';

import { Demo } from 'src/app/shared/demo.model';
@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styles: []
})
export class DemoListComponent implements OnInit {

 
  constructor(private service: DemoService) { }

  ngOnInit() {
    this.service.refreshlist();
   
    
    
    
  }
  popularteForm(Demo:Demo){
    this.service.formData= Object.assign({},Demo) ;
  }

  

}
