import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Language } from './language.model';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  LanguageList: Language[]
  /* #region  Form */
  LanguageFormAdd_update = this.fb.group({
    idLanguage: [''],
    label: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostLanguage() {
    this.LanguageFormAdd_update.setValue({
      idLanguage: '00000000-0000-0000-0000-000000000000',
      label: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateLanguage(microservice: Language) {
    this.LanguageFormAdd_update.setValue({
      idLanguage: microservice.idLanguage,
      label: microservice.label,

    })
  }
  /* #endregion */

  /* #region  get */
  getLanguageList() {
    return this.http.get(environment.MsMicroservice + "/Language/GetListMethod")

  }
  /* #endregion */

  // /* #region  delete */
  deleteMicroservice(idLanguage: string) {
    debugger
    console.log(idLanguage)
    return this.http.delete(environment.MsMicroservice + "/Language/DeleteSousCategory?id=" + idLanguage);

  }
  /* #endregion */
  /* #region  Post */
  postLanguage() {
    debugger
    return this.http.post(environment.MsMicroservice + "/Language/PostSousCategory", this.LanguageFormAdd_update.value);
  }
  /* #endregion */
  /* #region  Update */

  updateLanguage() {

    debugger
    return this.http.put(environment.MsMicroservice + "/Language/PutSousCategory", this.LanguageFormAdd_update.value,
);}
  /* #endregion */








}
