import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { DemandeInfo } from './demande-info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeInfoService {
  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  DemandeList: DemandeInfo[]
  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
  idInf: [''],
  description: ['', Validators.required],
    date: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      idInf: '00000000-0000-0000-0000-000000000000',
      description: '',
      date:'',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(microservice: DemandeInfo) {
    this.CommentaireFormAdd_update.setValue({
      idInf: microservice.idInf,
      description: microservice.description,
      date: microservice.date,

    })
  }
  /* #endregion */

  /* #region  get */
  getCommentaireList() {
    return this.http.get(environment.Commentaire + "/DemandeInfo")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idInf: string) {
    debugger
    console.log(idInf)
    return this.http.delete(environment.Commentaire + "/DemandeInfo/" + idInf, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {
    debugger
    return this.http.post(environment.Commentaire + "/DemandeInfo/", this.CommentaireFormAdd_update.value,
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
