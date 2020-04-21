import { Injectable } from '@angular/core';
import { Microservice } from './microservice.model';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})

export class MicroserviceService {
  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }


  MicroserviceList: Microservice[]
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
    return this.http.get(environment.MsMicroservice + "/MS")

  }
  /* #endregion */

  /* #region  delete */
  deleteMicroservice(idMS: string) {
    debugger
    console.log(idMS)
    return this.http.delete(environment.MsMicroservice + "/MS/" + idMS, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postMicroservice() {
    debugger
    return this.http.post(environment.MsMicroservice + "/MS/", this.MicroserviceFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  // updateMethod() {
  //   return this.http.put(environment.MsMicroservice + "/MS/" + this.MicroserviceFormAdd_update.controls.idMS.value,
  //     this.MicroserviceFormAdd_update.value,
  //     { responseType: "text" }
  //   );
  // }
  // addTodo (microservice): Observable<Microservice> {

  //   return this.http.post<Microservice>(`${environment.MsMicroservice}/create.php`, Microservice, httpOptions).pipe(
  //     tap((Microservice) => console.log(`added todo w/ id=${microservice.idMS}`)),
  //     catchError(this.handleError<Microservice>('addTodo'))
  //   );
  // }
  updateTodo(idMS, microservice): Observable<any> {

    const url = `${environment.MsMicroservice}/update.php?id=${idMS}`;
    return this.http.put(url, microservice, this.httpOptions).pipe(
      tap(_ => console.log(`updated todo id=${idMS}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<any>) => never {
    throw new Error("Method not implemented.");
  }
  getTodo(idMS: string): Observable<Microservice> {
    const url = `${environment.MsMicroservice}?id=${idMS}`;
    return this.http.get<Microservice>(url).pipe(
      tap(_ => console.log(`fetched todo id=${idMS}`)),
      catchError(this.handleError<Microservice>(`getTodo id=${idMS}`))
    );
  }

  /* #endregion */








}
