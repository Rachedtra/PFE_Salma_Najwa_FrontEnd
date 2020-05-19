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
import { GetDeleteDemandeInfoComponent } from './SittingDemandeInfo/get-delete-demande-info/get-delete-demande-info.component';
import { AddUpdateDemandeInfoComponent } from './SittingDemandeInfo/add-update-demande-info/add-update-demande-info.component';
import { GetDeleteSousCategorieComponent } from './SittingSousCategorie/get-delete-sous-categorie/get-delete-sous-categorie.component';
import { AddUpdateSousCategorieComponent } from './SittingSousCategorie/add-update-sous-categorie/add-update-sous-categorie.component';
import { GetDeleteCategorieComponent } from './SittingGestionCategorie/get-delete-categorie/get-delete-categorie.component';
import { AddUpdateCategorieComponent } from './SittingGestionCategorie/add-update-categorie/add-update-categorie.component';
import { GetDeleteVoteComponent } from './SittingVote/get-delete-vote/get-delete-vote.component';
import { AddUpdateVoteComponent } from './SittingVote/add-update-vote/add-update-vote.component';
import { MaquetteComponent } from './Sittingmaquette/maquette.component';
import { AnswerComponent } from './SittingMaquette1/answer/answer.component';
import { HomeComponent } from './SittingMaquette1/home/home.component';
import { ListDomainComponent } from './SittingMaquette1/list-domain/list-domain.component';

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
  {
    path: 'Demande_Info',
    component: GetDeleteDemandeInfoComponent,
  },
  {
    path: 'Demande_Info',
    component: AddUpdateDemandeInfoComponent,
  },
  {
    path: 'Sous_Categorie',
    component: GetDeleteSousCategorieComponent,
  },
  {
    path: 'Sous_Categorie',
    component: AddUpdateSousCategorieComponent,
  },
  {
    path: 'Gestion_Categorie',
    component: GetDeleteCategorieComponent,
  },
  {
    path: 'Gestion_Categorie',
    component: AddUpdateCategorieComponent,
  },
  {
    path: 'Vote',
    component: GetDeleteVoteComponent,
  },
  {
    path: 'Vote',
    component: AddUpdateVoteComponent,
  },


{
  path: 'maquette1',
component: ListDomainComponent,
},
{
  path: 'answer',
component: AnswerComponent,
},
{
  path: 'listDomain',
component: HomeComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
