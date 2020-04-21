import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { Microservice } from 'src/app/shared/microservice.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-update-microservice',
  templateUrl: './add-update-microservice.component.html',
  styles: []
})
export class AddUpdateMicroserviceComponent implements OnInit {

  employee: Microservice = new Microservice();
  submitted = false;

  constructor(private employeeService: MicroserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Microservice();
  }

  save() {
    this.employeeService.postMicroservice()
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Microservice();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/microservice']);
  }
}


















//   micro={
//   label: '',

//   description: '',
//   author: '',
//   lien: '',
//   diagClass: '',
//   languageFK:'',
//   published: false
// };
// submitted = false;
//   constructor(private service:MicroserviceService) { }

//   ngOnInit() {

//   }

//   saveTutorial() {
//     const data = {
//       label: this.micro.label,
//       description: this.micro.description, 
//       author: this.micro.author,
//       lien: this.micro.lien,
//       diagClass: this.micro.diagClass,
//       languageFK: this.micro.languageFK
//     };

//     this.service.postMicroservice()
//       .subscribe(
//         response => {
//           console.log(response);
//           this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   newTutorial() {
//     this.submitted = false;
//     this.micro = {
//       label: '',
//       description: '',
//       author: '',
//       lien: '',
//       diagClass: '',
//       languageFK: '',

//       published: false
//     };
//   }


 


