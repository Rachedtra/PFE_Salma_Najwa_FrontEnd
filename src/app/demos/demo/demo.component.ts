import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/demo.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  constructor(private servise:DemoService
    , private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    console.log(this.servise.list);
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.toastr.success('submitted successfully',); 
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
        this.toastr.success('inserted successfully'); 
          },
       err=>{
            console.log(err);
          }
    )
  }
 

    
  }