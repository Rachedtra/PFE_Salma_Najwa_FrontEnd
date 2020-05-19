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

  DemandeList: DemandeInfo[]

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /* #region  Form */
  DemandeInfoFormAdd_update = this.fb.group({
  idInf: [''],
  description: ['', Validators.required],
    date: ['', Validators.required],
    titre: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostDemandeInfo() {
    this.DemandeInfoFormAdd_update.setValue({
      idInf: '00000000-0000-0000-0000-000000000000',
      description: '',
      date:'',
      titre:'',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateDemandeInfo(microservice: DemandeInfo) {
    this.DemandeInfoFormAdd_update.setValue({
      idInf: microservice.idInf,
      description: microservice.description,
      date: microservice.date,
      titre: microservice.date,

    })
  }
  /* #endregion */

  /* #region  get */
  getDemandeInfoList() {
    return this.http.get(environment.Commentaire + "/DemandeInfo")

  }
  /* #endregion */

  // /* #region  delete */
  deleteDemandeInfo(idInf: string) {
    debugger
    console.log(idInf)
    return this.http.delete(environment.Commentaire + "/DemandeInfo/" + idInf, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postDemandeInfo() {
    debugger
    return this.http.post(environment.Commentaire + "/DemandeInfo/", this.DemandeInfoFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateDemandeInfo() {

    debugger
    return this.http.put(environment.Commentaire + "/DemandeInfo/", this.DemandeInfoFormAdd_update.value,
      { responseType: "text" });}
  /* #endregion */








}