import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { GestionCategorie } from './gestion-categorie.model';

@Injectable({
  providedIn: 'root'
})
export class GestionCategorieService {

  private httpOptions: any;
  CategorieList: GestionCategorie[]


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
    idCategorie: [''],
    label: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      idCategorie: '00000000-0000-0000-0000-000000000000',
      label: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(microservice: GestionCategorie) {
    this.CommentaireFormAdd_update.setValue({
      idCategorie: microservice.idCategorie,
      label: microservice.label,

    })
  }
  /* #endregion */

  /* #region  get */
  getCategorieList() {
    return this.http.get(environment.Commentaire + "/Category/GetListCategory")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCategorie(idCategorie: string) {
    debugger
    console.log(idCategorie)
    return this.http.delete(environment.Commentaire + "/Category/DeleteCategory?id=" + idCategorie);

  }
  /* #endregion */
  /* #region  Post */
  postCategorie() {
    debugger
    return this.http.post(environment.Commentaire + "/Category/PostCategory", this.CommentaireFormAdd_update.value,
      );
  }
  /* #endregion */
  /* #region  Update */

  updateCategorie() {

    debugger
    return this.http.put(environment.Commentaire + "/Category/PutCategory", this.CommentaireFormAdd_update.value,
      );}
  /* #endregion */








}
