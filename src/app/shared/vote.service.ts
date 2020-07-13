import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Vote } from './vote.model';
@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private httpOptions: any;
  VoteList: Vote[]
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /* #region  Form */
  VoteFormAdd_update = this.fb.group({
    idVote: [''],
    note: ['', Validators.required]  


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostVote() {
    this.VoteFormAdd_update.setValue({
      idVote: '00000000-0000-0000-0000-000000000000',
      note: '',

    

    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateVote(vote: Vote) {
    this.VoteFormAdd_update.setValue({
      idVote: vote.idVote,
      note: vote.note,

    })
  }
  /* #endregion */

  /* #region  get */
  getListVote() {
    return this.http.get(environment.Commentaire + "/Vote/GetListCategory")

  }
  /* #endregion */

  /* #region  delete */
  deleteVote(idVote: string) {
    
    console.log(idVote)
    return this.http.delete(environment.Commentaire + "/Vote/DeleteCategory/?id=" + idVote);

  }
  postVote() {
    debugger
    return this.http.post(environment.Commentaire + "/Vote/Postvote", this.VoteFormAdd_update.value,
      );
  }
  /* #endregion */
  /* #region  Update */

  updateVote() {
    debugger
    return this.http.put(environment.Commentaire + "/Vote/Putvote", this.VoteFormAdd_update.value,
      );}
  
  










}
