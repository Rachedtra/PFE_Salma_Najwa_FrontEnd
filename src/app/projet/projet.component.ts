import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProjetService } from '../shared/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styles: []
})
export class ProjetComponent implements OnInit {
  projetForms : FormArray = this.fb.array([]);
  ProjetList = [];
  constructor(private fb :FormBuilder,private projetService :ProjetService) { }

  ngOnInit() {
    this.projetService.GETAll().subscribe(
      res =>this.ProjetList = res as []);
    this.addProjetForm();
  }
  addProjetForm(){
    this.projetForms.push(this.fb.group({
      IdProjet:[''],
      Nom:[''],
      Description:['']
    }));
}
}