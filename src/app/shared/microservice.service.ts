import { Injectable } from '@angular/core';
import { Microservice } from './microservice.model';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})

export class MicroserviceService {
  private httpOptions: any;

  MicroserviceList: Microservice[]

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /* #region  Form */
  MicroserviceFormAdd_update = this.fb.group({
    idMS: [''],
    label: ['', Validators.required],
    description: ['', Validators.required],
    author: ['', Validators.required],
    lien: ['', Validators.required],
    diagClass: ['', Validators.required],
    languageFK: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostMicroservice() {
    this.MicroserviceFormAdd_update.setValue({
      idMS: '00000000-0000-0000-0000-000000000000',
      label: '',

      description: '',
      author: '',
      lien: '',
      diagClass: '',
      languageFK: '',

    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateMicroservice(microservice: Microservice) {
    this.MicroserviceFormAdd_update.setValue({
      idMS: microservice.idMS,
      label: microservice.label,

      description: microservice.description,
      author: microservice.author,
      lien: microservice.lien,
      diagClass: microservice.diagClass,
      languageFK: microservice.languageFK,
    })
  }
  /* #endregion */

  /* #region  get */
  getListMicroservice() {
    return this.http.get(environment.MsMicroservice + "/MS/GetListCommentaire")

  }
  /* #endregion */

  /* #region  delete */
  deleteMicroservice(idMS: string) {
    debugger
    console.log(idMS)
    return this.http.delete(environment.MsMicroservice + "/MS/DeleteSousCategory?id=" + idMS);

  }
  /* #endregion */
  /* #region  Post */
  postMicroservice() {
    debugger
    return this.http.post(environment.MsMicroservice + "/MS/PostSousCategory", this.MicroserviceFormAdd_update.value);
  }
  /* #endregion */
  /* #region  Update */

  updateMicroservice() {
    debugger
    return this.http.put(environment.MsMicroservice + "/MS/PutSousCategory", this.MicroserviceFormAdd_update.value);}


  /* #endregion */








}
