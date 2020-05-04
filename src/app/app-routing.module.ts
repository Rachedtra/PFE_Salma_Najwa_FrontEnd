import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';
import { AddUpdateMicroserviceComponent } from './SittingMs/add-update-microservice/add-update-microservice.component';
import { GetDeleteProjetComponent } from './SittingProjet/get-delete-projet/get-delete-projet.component';
import { AddUpdateProjetComponent } from './SittingProjet/add-update-projet/add-update-projet.component';

const routes: Routes = [
  {
    path: 'Microservice',
    component: GetDeleteMicroserviceComponent,
  },
  {
    path: 'Microservice',
    component: AddUpdateMicroserviceComponent,
  },
  {
    path: 'Projet',
    component: GetDeleteProjetComponent,
  },
  {
    path: 'Projet',
    component: AddUpdateProjetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
