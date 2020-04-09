import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  MethodForms : FormArray = this.fb.array([]);
  MethodList = [];

  constructor(private fb :FormBuilder,private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.getMethodList().subscribe(
    res=>{
      if(res ==[])
      this.addMethodeForm(); 
else{
 (res as []).forEach((home : any)=>{
   this.MethodForms.push(this.fb.group({
     IdMethod:[home.IdMethod],
     Name:[home.Name,Validators.required],
     Description:[home.Description,Validators.required],
     input:[home.input,Validators.required],
     output:[home.output,Validators.required]
     }));
   });
  }
}
);
}
addMethodeForm(){
    this.MethodForms.push(this.fb.group({
      IdMethod:[0],
      Nom:['',Validators.required],
      Description:['',Validators.required],
      input:['',Validators.required],
      output:['',Validators.required]
    }));
}
recordSubmit(fg:FormGroup){
  if(fg.value.IdMethod ==0)
this.homeService.PostMethod(fg.value)
.subscribe(
  (res:any)=>{
    fg.patchValue({IdMethod:res.PMId});
  });
  else{
this.homeService.PutMethod(fg.value)
.subscribe(
  (res:any)=>{
  });
  }
}

}