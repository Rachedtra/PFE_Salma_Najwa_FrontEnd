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
    description: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostCommentaire() {
    this.CommentaireFormAdd_update.setValue({
      description: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(commentaire: Commentaire) {
    this.CommentaireFormAdd_update.setValue({
      idCom: commentaire.idCom,
      description: commentaire.description,

    })
  }
  /* #endregion */

  /* #region  get */
  getCommentaireList() {
    console.log("test2");
    return this.http.get(environment.Commentaire + "/Commentaire")

  }
  /* #endregion */

  // /* #region  delete */
  deleteCommentaire(idCom: string) {
    debugger
    console.log(idCom)
    return this.http.delete(environment.Commentaire + "/Commentaire/" + idCom, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postCommentaire() {
    
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


  read(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${environment.Commentaire}/${this.commentaireService}/${id}`);
  }
  



 
}
