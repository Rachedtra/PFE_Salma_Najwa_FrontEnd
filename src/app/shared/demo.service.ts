import { Injectable } from '@angular/core';
import { Demo } from './demo.model';
import { HttpClient } from "@angular/common/http";
import { FormBuilder,Validators } from "@angular/forms";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  liste: Demo[];
  /* #region  Form */
  DemoFormAdd_update = this.fb.group({
    id: [''],
    nom: ['', Validators.required],
 


  })


  initializePostdemo() {
    this.DemoFormAdd_update.setValue({
      id: '00000000-0000-0000-0000-000000000000',
      nom: '',
    })
  }

  initializeUpdatedemo(demo: Demo) {
    this.DemoFormAdd_update.setValue({
      id: demo.id,
      nom: demo.nom,

    })
  }
  /* #endregion */

  /* #region  get */
  getdemo() {
    return this.http.get(environment.Domain+ "/Domain")

  }
  /* #endregion */

  /* #region  delete */
  deletedemo(id: string) {
    debugger
    console.log(id)
    return this.http.delete(environment.Domain + "/Domain/" + id, { responseType: "text" });

  }
  /* #endregion */
  /* #region  Post */
  postMicroservice() {
    debugger
    return this.http.post(environment.Domain + "/Domain/", this.DemoFormAdd_update.value,
      { responseType: "text" });
  }
  /* #endregion */
  /* #region  Update */

  updateMethod() {
    return this.http.put(environment.Domain + "/Domain/" + this.DemoFormAdd_update.controls.id.value,
      this.DemoFormAdd_update.value,
      { responseType: "text" }
    );
  }
}