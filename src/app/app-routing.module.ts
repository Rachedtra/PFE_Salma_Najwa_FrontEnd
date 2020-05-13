import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';
import { AddUpdateMicroserviceComponent } from './SittingMs/add-update-microservice/add-update-microservice.component';
import { GetDeleteProjetComponent } from './SittingProjet/get-delete-projet/get-delete-projet.component';
import { AddUpdateProjetComponent } from './SittingProjet/add-update-projet/add-update-projet.component';
import { GetDeleteDomainComponent } from './SittingDomain/get-delete-domain/get-delete-domain.component';
import { AddUpdateDomainComponent } from './SittingDomain/add-update-domain/add-update-domain.component';
import { GetDeleteMethodComponent } from './SittingMethod/get-delete-method/get-delete-method.component';
import { AddUpdateMethodComponent } from './SittingMethod/add-update-method/add-update-method.component';
import { GetDeleteLanguageComponent } from './SittingLanguage/get-delete-language/get-delete-language.component';
import { AddUpdateLanguageComponent } from './SittingLanguage/add-update-language/add-update-language.component';
import { GetDeleteVersionComponent } from './SittingVersion/get-delete-version/get-delete-version.component';
import { AddUpdateVersionComponent } from './SittingVersion/add-update-version/add-update-version.component';
import { GetDeleteCommentaireComponent } from './SittingCommentaire/get-delete-commentaire/get-delete-commentaire.component';
import { AddUpdateCommentaireComponent } from './SittingCommentaire/add-update-commentaire/add-update-commentaire.component';

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
  {
    path: 'Domain',
    component: GetDeleteDomainComponent,
  },
  {
    path: 'Domain',
    component: AddUpdateDomainComponent,
  },
  {
    path: 'Method',
    component: GetDeleteMethodComponent,
  },
  {
    path: 'Method',
    component: AddUpdateMethodComponent,
  },
  {
    path: 'Language',
    component: GetDeleteLanguageComponent,
  },
  {
    path: 'Language',
    component: AddUpdateLanguageComponent,
  },
  {
    path: 'Version',
    component: GetDeleteVersionComponent,
  },
  {
    path: 'Version',
    component: AddUpdateVersionComponent,
  }, 
  {
    path: 'Commentaire',
    component: GetDeleteCommentaireComponent,
  },
  {
    path: 'Commentaire',
    component: AddUpdateCommentaireComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
