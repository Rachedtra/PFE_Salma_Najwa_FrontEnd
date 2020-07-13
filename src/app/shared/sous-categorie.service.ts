import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SousCategorie } from './sous-categorie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  SousCategorieList: SousCategorie[]
  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
  idSC: [''],
  label: ['', Validators.required],
  fK_SousCategorie: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      idSC: '00000000-0000-0000-0000-000000000000',
      label: '',
      fK_SousCategorie: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(microservice: SousCategorie) {
    this.CommentaireFormAdd_update.setValue({
      idSC: microservice.idSC,
      label: microservice.label,
      fK_SousCategorie: microservice.fK_SousCategorie,

    })
  }
  /* #endregion */

  /* #region  get */
  getCommentaireList() {
    return this.http.get(environment.Commentaire + "/SousCategorie/GetListSousCategory")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idSC: string) {
    debugger
    console.log(idSC)
    return this.http.delete(environment.Commentaire + "/SousCategorie/DeleteSousCategory?id=" + idSC);

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {

    return this.http.post(environment.Commentaire + "/SousCategorie/PostSousCategory", this.CommentaireFormAdd_update.value
     );
  }
  /* #endregion */
  /* #region  Update */

  updateCommentaire() {

    debugger
    return this.http.put(environment.Commentaire + "/SousCategorie/PutSousCategory/", this.CommentaireFormAdd_update.value
      );}
  /* #endregion */








}
