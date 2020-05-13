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


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  CategorieList: GestionCategorie[]
  /* #region  Form */
 CommentaireFormAdd_update = this.fb.group({
    ididCategorieCom: [''],
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
  getCommentaireList() {
    return this.http.get(environment.Commentaire + "/Categorie")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idCategorie: string) {
    debugger
    console.log(idCategorie)
    return this.http.delete(environment.Commentaire + "/Categorie/" + idCategorie, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {
    debugger
    return this.http.post(environment.Commentaire + "/Categorie/", this.CommentaireFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateCommentaire() {

    debugger
    return this.http.put(environment.Commentaire + "/Categorie/", this.CommentaireFormAdd_update.value,
      { responseType: "text" });}
  /* #endregion */








}
