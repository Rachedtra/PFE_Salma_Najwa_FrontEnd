import { Component, OnInit, Inject } from '@angular/core';
import { Microservice } from 'src/app/shared/microservice.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-update-microservice',
  templateUrl: './update-microservice.component.html',
  styles: []
})
export class UpdateMicroserviceComponent implements OnInit {
  todoForm: FormGroup;
  idMS: string;
 
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private api: MicroserviceService,
    private activeAouter: ActivatedRoute

  ) { }
 
  ngOnInit() {
     
    this.getDetail(this.activeAouter.snapshot.params['id']);

    this.todoForm = this.formBuilder.group({
      label: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])],
      lien: ['', Validators.compose([Validators.required])],
      diagClass: ['', Validators.compose([Validators.required])],
      languageFK: ['', Validators.compose([Validators.required])],


    });
  }
  getDetail(idMS) {
    this.api.getTodo(idMS)
      .subscribe(data => {
        this.idMS = data.idMS;
        this.todoForm.setValue({
          label: data.label,
          description:data.description,
          author: data.author,
          lien:data.lien,
          diagClass: data.diagClass,
          languageFK:data.languageFK,
        });
        console.log(data);
      });
  }

  updateTodo(form:NgForm) {
 
    this.api.updateTodo(this.idMS, form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
     
  }
 
}
  // id: number;
  // formData:Microservice;

  // constructor(private route: ActivatedRoute,private router: Router,
  //   private MSService: MicroserviceService) { }

  // ngOnInit() {
//     this.formData = new Microservice();

//     this.id = this.route.snapshot.params['id'];
    
//     this.MSService.getListMicroservice()
//       .subscribe(data => {
//         console.log(data)
//       }, error => console.log(error));
//   }

//   OnSubmit() {
//     this.MSService.updateMethod()
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.formData = new Microservice();
//     this.gotoList();
//   }

//   onSubmit() {
//     this.OnSubmit();    
//   }

//   gotoList() {
//     this.router.navigate(['/microservice']);
//   }
