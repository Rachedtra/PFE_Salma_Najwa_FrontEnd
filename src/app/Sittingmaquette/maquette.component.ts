import { Component, OnInit } from '@angular/core';
import { GestionCategorieService } from '../shared/gestion-categorie.service';
import { DomaineService } from '../shared/domaine.service';

@Component({
  selector: 'app-maquette',
  templateUrl: './maquette.component.html',
  styleUrls: ['./maquette.component.css']
})
export class MaquetteComponent implements OnInit {
  CategorieList:[];
  DomainList:[];

  constructor( private CategorieService :GestionCategorieService, private DomaineService:DomaineService) { }

  ngOnInit() {
    this.CategorieService.getCategorieList()
    .subscribe(res => this.CategorieList = res as []); 
    this.DomaineService.getDomainList()
    .subscribe(res => this.DomainList = res as []);
  }
  onSubmit() {
    debugger
   
}
}