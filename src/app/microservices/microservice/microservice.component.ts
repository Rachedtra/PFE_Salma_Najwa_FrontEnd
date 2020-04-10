import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-microservice',
  templateUrl: './microservice.component.html',
  styles: []
})
export class MicroserviceComponent implements OnInit {

  constructor(private service : MicroserviceService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      IdMS: '',
      Description: '',
      Label: '',
      Author: '',
      Lien: '',
      DiagClass: '',
    }
  }


}