import { Component, OnInit } from '@angular/core';
import { DemoService } from '../shared/demo.service';
import { Demo } from '../shared/demo.model';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styles: []
})
export class DemosComponent implements OnInit {

  constructor(private DemoService: DemoService) { }
  
  
    ngOnInit() {
      this.GetMicroservices();
  
    }
    GetMicroservices() {
      this.DemoService.getdemo().subscribe(res => {
        this.DemoService.liste = res as Demo[]
      })
    }
   
  
    OnDelete(id) {
      
      if (confirm("Vous êtes sûr de vouloir supprimer")) {
        this.DemoService.deletedemo(id).subscribe(
          res => {
  
            if (res == "Delete Done") {
              
              this.DemoService.getdemo().subscribe(res => {
                this.DemoService.liste = res as Demo[]
          
              })
  
            }
          },
      
        );
      }
    }
  
  
    
    openComponentForPost() {
      this.DemoService.initializePostdemo();
      console.log(this.DemoService.initializePostdemo())  
     
      
    }
  
    openComponentForUpdate(demo: Demo) {
      this.DemoService.initializeUpdatedemo(demo);
   
    }
  }