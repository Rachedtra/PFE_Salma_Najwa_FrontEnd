import { Injectable} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Version } from './version.model';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  VersionList: Version[]
  /* #region  Form */
  VersionFormAdd_update = this.fb.group({
    iDversion: [''],
    numero: ['', Validators.required]


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostMicroservice() {
    this.VersionFormAdd_update.setValue({
      iDversion: '00000000-0000-0000-0000-000000000000',
      numero: '',


    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateVersion(version: Version) {
    this.VersionFormAdd_update.setValue({
      iDversion: version.iDversion,
      numero: version.numero,

    })
  }
  /* #endregion */

  /* #region  get */
  getListVersion() {
    return this.http.get(environment.MsMicroservice + "/Version")

  }
  /* #endregion */

  /* #region  delete */
  deleteVersion(iDversion: string) {
    debugger
    console.log(iDversion)
    return this.http.delete(environment.MsMicroservice + "/Version/" + iDversion, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postVersion() {
    debugger
    return this.http.post(environment.MsMicroservice + "/Version/", this.VersionFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateVersion() {
    debugger
    return this.http.put(environment.MsMicroservice + "/Version/", this.VersionFormAdd_update.value,
      { responseType: "text" });}


  /* #endregion */








}
