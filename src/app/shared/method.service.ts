import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Method } from './method.model';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  MethodList: Method[]
  /* #region  Form */
  MethodFormAdd_update = this.fb.group({
    idMethod: [''],
    nom: ['', Validators.required],
    description: ['', Validators.required],
    input: ['', Validators.required],
    output: ['', Validators.required],
    fK_Microservice: ['', Validators.required]

  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostMethod() {
    this.MethodFormAdd_update.setValue({
      idMethod: '00000000-0000-0000-0000-000000000000',
      nom: '',

      description: '',
      input: '',
      output: '',
      fK_Microservice:''

    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateMethod(method: Method) {
    this.MethodFormAdd_update.setValue({
      idMethod: method.idMethod,
      nom: method.nom,

      description: method.description,
      input: method.input,
      output: method.output,
      fK_Microservice:method.fK_Microservice
    })
  }
  /* #endregion */

  /* #region  get */
  getListMethod() {
    return this.http.get(environment.MsMicroservice + "/Method/GetListMethod")

  }
  /* #endregion */

  /* #region  delete */
  deleteMethod(idMethod: string) {
    debugger
    console.log(idMethod)
    return this.http.delete(environment.MsMicroservice + "/Method/DeleteSousCategory?id=" + idMethod);

  }
//   /* #endregion */
//   /* #region  Post */
  postMethod() {
    debugger
    return this.http.post(environment.MsMicroservice + "/Method/PostSousCategory", this.MethodFormAdd_update.value);
  }
  /* #endregion */
  /* #region  Update */

  updateMethod() {
    debugger
    return this.http.put(environment.MsMicroservice + "/Method/PutSousCategory", this.MethodFormAdd_update.value);}


//   /* #endregion */








}
