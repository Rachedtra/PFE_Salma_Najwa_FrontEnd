;import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';


import { HttpClientModule } from '@angular/common/http';
import { MicroserviceService } from './shared/microservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';
import { ModalModule,BsModalRef} from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddUpdateMicroserviceComponent } from './SittingMs/add-update-microservice/add-update-microservice.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { GetDeleteProjetComponent } from './SittingProjet/get-delete-projet/get-delete-projet.component';
import { AddUpdateProjetComponent } from './SittingProjet/add-update-projet/add-update-projet.component';
import { ProjetService } from './shared/projet.service';
import { GetDeleteDomainComponent } from './SittingDomain/get-delete-domain/get-delete-domain.component';
import { GetDeleteMethodComponent } from './SittingMethod/get-delete-method/get-delete-method.component';
import { GetDeleteLanguageComponent } from './SittingLanguage/get-delete-language/get-delete-language.component';
import { GetDeleteVersionComponent } from './SittingVersion/get-delete-version/get-delete-version.component';
import { AddUpdateVersionComponent } from './SittingVersion/add-update-version/add-update-version.component';
import { AddUpdateLanguageComponent } from './SittingLanguage/add-update-language/add-update-language.component';
import { AddUpdateMethodComponent } from './SittingMethod/add-update-method/add-update-method.component';
import { AddUpdateDomainComponent } from './SittingDomain/add-update-domain/add-update-domain.component';
import { DomaineService } from './shared/domaine.service';
import { MethodService } from './shared/method.service';
import { LanguageService } from './shared/language.service';
import { VersionService } from './shared/version.service';
import { GetDeleteCategorieComponent } from './SittingGestionCategorie/get-delete-categorie/get-delete-categorie.component';
import { AddUpdateCategorieComponent } from './SittingGestionCategorie/add-update-categorie/add-update-categorie.component';
import { GetDeleteSousCategorieComponent } from './SittingSousCategorie/get-delete-sous-categorie/get-delete-sous-categorie.component';
import { AddUpdateSousCategorieComponent } from './SittingSousCategorie/add-update-sous-categorie/add-update-sous-categorie.component';
import { GetDeleteDemandeInfoComponent } from './SittingDemandeInfo/get-delete-demande-info/get-delete-demande-info.component';
import { AddUpdateDemandeInfoComponent } from './SittingDemandeInfo/add-update-demande-info/add-update-demande-info.component';
import { GetDeleteCommentaireComponent } from './SittingCommentaire/get-delete-commentaire/get-delete-commentaire.component';
import { AddUpdateCommentaireComponent } from './SittingCommentaire/add-update-commentaire/add-update-commentaire.component';
import { AddUpdateVoteComponent } from './SittingVote/add-update-vote/add-update-vote.component';
import { GetDeleteVoteComponent } from './SittingVote/get-delete-vote/get-delete-vote.component';
//import { AnswerComponent } from './sittingmaquette/answer/answer.component';
import { ListDomainComponent } from './sittingmaquette/list-domain/list-domain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
    GetDeleteMicroserviceComponent,
    AddUpdateMicroserviceComponent,
    GetDeleteProjetComponent,
    AddUpdateProjetComponent,
    GetDeleteDomainComponent,
    GetDeleteMethodComponent,
    GetDeleteLanguageComponent,
    GetDeleteVersionComponent,
    AddUpdateVersionComponent,
    AddUpdateLanguageComponent,
    AddUpdateMethodComponent,
    AddUpdateDomainComponent,
    GetDeleteCategorieComponent,
    AddUpdateCategorieComponent,
    GetDeleteSousCategorieComponent,
    AddUpdateSousCategorieComponent,
    GetDeleteDemandeInfoComponent,
    AddUpdateDemandeInfoComponent,
    GetDeleteCommentaireComponent,
    AddUpdateCommentaireComponent,
    AddUpdateVoteComponent,
    GetDeleteVoteComponent,
    //AnswerComponent,
    ListDomainComponent,
  
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
     NgxPaginationModule,
     MatSelectModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [MicroserviceService,ProjetService,DomaineService,MethodService,LanguageService,VersionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
