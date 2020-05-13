import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commentaire } from './commentaire.model';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  CommentaireList: Commentaire[]
  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
    idCom: [''],
    description: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      idCom: '00000000-0000-0000-0000-000000000000',
      description: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(microservice: Commentaire) {
    this.CommentaireFormAdd_update.setValue({
      idCom: microservice.idCom,
      description: microservice.description,

    })
  }
  /* #endregion */

  /* #region  get */
  getCommentaireList() {
    return this.http.get(environment.Commentaire + "/Commentaire")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idLanguage: string) {
    debugger
    console.log(idLanguage)
    return this.http.delete(environment.Commentaire + "/Language/" + idLanguage, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {
    debugger
    return this.http.post(environment.Commentaire + "/Commentaire/", this.CommentaireFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateCommentaire() {

    debugger
    return this.http.put(environment.Commentaire + "/Commentaire/", this.CommentaireFormAdd_update.value,
      { responseType: "text" });}
  /* #endregion */








}
