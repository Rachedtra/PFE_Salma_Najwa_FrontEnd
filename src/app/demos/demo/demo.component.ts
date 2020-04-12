import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/demo.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  constructor(private servise:DemoService
    ) { }

  ngOnInit() {
    this.resetForm();
    console.log(this.servise.list);
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.servise.formData=
    {
      id:null,
      nom:'',
     }
    
   
  }
  onSubmit(form:NgForm){
  
    this.insertRecord(form);
  
  }
  
  insertRecord(form:NgForm){
    this.servise.postDemo(form.value).subscribe(res=>{
        this.resetForm(form);
    
          },
       err=>{
            console.log(err);
          }
    )
  }
 

    
  }