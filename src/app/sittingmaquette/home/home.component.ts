import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/shared/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/shared/domaine.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  DomainList:[];
  constructor(private domaineService:DomaineService) { }

  ngOnInit() {
    this.domaineService.getDomainList()
    .subscribe(res => this.DomainList = res as []);

  }
// save(domainForm):void{
// console.log(domainForm.value);
// }
fetchId = "00000000-0000-0000-0000-000000000000";

//getUser() {
 // debugger
  //this.domaineService.getDomainById(this.fetchId).subscribe(data => {
  //   this.Domaine = data;
  //  this.displayData= true;
 // });
}



