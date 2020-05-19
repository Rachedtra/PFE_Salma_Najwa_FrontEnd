import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Domaine } from './domaine.model';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private httpOptions: any;
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  DomainList: Domaine[]
  /* #region  Form */
  DomainFormAdd_update = this.fb.group({
    idDomaine: [''],
    nom: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostDomain() {
    this.DomainFormAdd_update.setValue({
      idDomaine: '00000000-0000-0000-0000-000000000000',
      nom: '',


    })
  }
  
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateMicroservice(microservice: Domaine) {
    this.DomainFormAdd_update.setValue({
      idDomaine: microservice.idDomaine,
      nom: microservice.nom,

    })
  }
  /* #endregion */

  /* #region  get */
  getDomainList() {
    return this.http.get(environment.MsMicroservice + "/Domain")

  }
  
  /* #endregion */

  /* #region  delete */
  deleteDomain(idDomaine: string) {
    debugger
    console.log(idDomaine)
    return this.http.delete(environment.MsMicroservice + "/Domain/" + idDomaine, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postDomain() {
    debugger
    return this.http.post(environment.MsMicroservice + "/Domain/", this.DomainFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateDomain() {
    debugger
    return this.http.put(environment.MsMicroservice + "/Domain/", this.DomainFormAdd_update.value,
      { responseType: "text" });}

      getDomainById (id: string): Observable<Domaine> {
        const url = `${environment.MsMicroservice}/${id}`;
        return this.http.get<Domaine>(url).pipe(
        catchError(this.handleError)
        );
        }
  /* #endregion */








}
