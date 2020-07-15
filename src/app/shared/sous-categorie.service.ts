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
  initializeFormForUpdateSousCategorie(SousCategorie: SousCategorie) {
    this.CommentaireFormAdd_update.setValue({
      idSC: SousCategorie.idSC,
      label: SousCategorie.label,
      fK_SousCategorie: SousCategorie.fK_SousCategorie,

    })
  }
  /* #endregion */

  /* #region  get */
  getSousCategorieList() {
    return this.http.get(environment.Commentaire + "/SousCategorie/getSousCategorieDto")

  }
  /* #endregion */

  // /* #region  delete */
  deleteSousCategorie(idSC: string) {
    debugger
    console.log(idSC)
    return this.http.delete(environment.Commentaire + "/SousCategorie/DeleteSousCategory?id=" + idSC);

  }
  /* #endregion */
  /* #region  Post */
  postSousCategorie() {

    return this.http.post(environment.Commentaire + "/SousCategorie/PostSousCategory", this.CommentaireFormAdd_update.value
     );
  }
  /* #endregion */
  /* #region  Update */

  updateSousCategorie() {

    debugger
    return this.http.put(environment.Commentaire + "/SousCategorie/PutSousCategory/", this.CommentaireFormAdd_update.value
      );}
  /* #endregion */








}
