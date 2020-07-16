import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commentaire } from './commentaire.model';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DemandeInfo } from './demande-info.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private httpOptions: any;
  CommentaireList: Commentaire[]


  constructor(private http: HttpClient, private fb: FormBuilder,private commentaireService:CommentaireService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
  }

  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
  idCom: [''],

  idQuestion: [''],

  description: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      idCom: '00000000-0000-0000-0000-000000000000',

      idQuestion: '',
      description: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(commentaire: Commentaire) {
    this.CommentaireFormAdd_update.setValue({
      idCom: commentaire.idCom,
      idQuestion: commentaire.idQuestion,

      description: commentaire.description,

    })
  }
  /* #endregion */

  /* #region  get */
  GetListCommentaire() {
    console.log("test2");
    return this.http.get(environment.Commentaire + "/Commentaire/getCommentaireDto")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idCom: string) {
    debugger
    console.log(idCom)
    return this.http.delete(environment.Commentaire + "/Commentaire/DeleteCommentaire?id=" + idCom);

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {
    debugger
    return this.http.post(environment.Commentaire + "/Commentaire/PostCommenataire", this.CommentaireFormAdd_update.value);
  }
  /* #endregion */
  /* #region  Update */

  updateCommentaire() {

    debugger
    return this.http.put(environment.Commentaire + "/Commentaire/PutCommenataire", this.CommentaireFormAdd_update.value,
    );}
  /* #endregion */


  
  getcommentaireByIDdemande(IdDemande) {
    return this.http.get(environment.Commentaire + "/Commentaire/GetListCommentaire1?id=" + IdDemande);

  }

 
}
