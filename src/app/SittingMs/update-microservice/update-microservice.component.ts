import { Component, OnInit, Inject } from '@angular/core';
import { Microservice } from 'src/app/shared/microservice.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-update-microservice',
  templateUrl: './update-microservice.component.html',
  styles: []
})
export class UpdateMicroserviceComponent implements OnInit {
  id: number;
  formData:Microservice;

  constructor(private route: ActivatedRoute,private router: Router,
    private MSService: MicroserviceService) { }

  ngOnInit() {
    this.formData = new Microservice();

    this.id = this.route.snapshot.params['id'];
    
    this.MSService.getListMicroservice()
      .subscribe(data => {
        console.log(data)
      }, error => console.log(error));
  }

  OnSubmit() {
    this.MSService.updateMethod()
      .subscribe(data => console.log(data), error => console.log(error));
    this.formData = new Microservice();
    this.gotoList();
  }

  onSubmit() {
    this.OnSubmit();    
  }

  gotoList() {
    this.router.navigate(['/microservice']);
  }
}