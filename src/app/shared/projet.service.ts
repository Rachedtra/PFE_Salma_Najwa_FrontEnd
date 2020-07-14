import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projet } from './projet.model';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
private httpOptions: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  ProjetList: Projet[]
  /* #region  Form */
  ProjetFormAdd_update = this.fb.group({
    idProjet: [''],
    nom: ['', Validators.required],
    description: ['', Validators.required]
  


  })
  /* #endregion */

  /* #region  InitialFormPost */

  initializeFormForPostMicroservice() {
    this.ProjetFormAdd_update.setValue({
      idProjet: '00000000-0000-0000-0000-000000000000',
      nom: '',

      description: '',
    

    })
  }
  /* #endregion */

  /* #region  InitialFormUpdate */
  initializeFormForUpdateMicroservice(microservice: Projet) {
    this.ProjetFormAdd_update.setValue({
      idProjet: microservice.idProjet,
      nom: microservice.nom,

      description: microservice.description,
    
    })
  }
  /* #endregion */

  /* #region  get */
  getLisProjet() {
    return this.http.get(environment.MsMicroservice + "/Projet/GetListMethod")

  }
  /* #endregion */

  /* #region  delete */
 deleteProjet(idProjet: string) {
    debugger
     console.log(idProjet)
   return this.http.delete(environment.MsMicroservice + "/Projet/DeleteSousCategory?id=" + idProjet);

  }
  postProjet() {
    debugger
    return this.http.post(environment.MsMicroservice + "/Projet/PostSousCategory", this.ProjetFormAdd_update.value);
  }
  /* #endregion */
  /* #region  Update */

  updateProjet() {
    debugger
    return this.http.put(environment.MsMicroservice + "/Projet/PutSousCategory", this.ProjetFormAdd_update.value,
    );}
  
  










}
