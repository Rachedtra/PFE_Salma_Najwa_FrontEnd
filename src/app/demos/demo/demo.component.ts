import { Component,OnInit  } from '@angular/core';
import { DemoService } from 'src/app/shared/demo.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  demo={
  nom: '',
  published: false
};
submitted = false;
  constructor(private service:DemoService) { }

  ngOnInit() {

  }

  saveTutorial() {
    const data = {
      nom: this.demo.nom,
    };

    this.service.postdemo()
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
    this.demo = {
      nom: '',

      published: false
    };
  }


 

}

