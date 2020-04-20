import { Component, OnInit } from '@angular/core';
import { MicroserviceService } from 'src/app/shared/microservice.service';

@Component({
  selector: 'app-add-update-microservice',
  templateUrl: './add-update-microservice.component.html',
  styles: []
})
export class AddUpdateMicroserviceComponent implements OnInit {
  micro={
  label: '',

  description: '',
  author: '',
  lien: '',
  diagClass: '',
  languageFK:'',
  published: false
};
submitted = false;
  constructor(private service:MicroserviceService) { }

  ngOnInit() {

  }

  saveTutorial() {
    const data = {
      label: this.micro.label,
      description: this.micro.description, 
      author: this.micro.author,
      lien: this.micro.lien,
      diagClass: this.micro.diagClass,
      languageFK: this.micro.languageFK
    };

    this.service.postMicroservice()
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.micro = {
      label: '',
      description: '',
      author: '',
      lien: '',
      diagClass: '',
      languageFK: '',

      published: false
    };
  }


 

}

