import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';
import { AddUpdateMicroserviceComponent } from './SittingMs/add-update-microservice/add-update-microservice.component';
import { UpdateMicroserviceComponent } from './SittingMs/update-microservice/update-microservice.component';

const routes: Routes = [


  {
    path: 'Microservice',
    component: GetDeleteMicroserviceComponent,
    
  },
  {
    path: 'Microservice',
  
      component: AddUpdateMicroserviceComponent,
  
   }, 
   {
  path: 'Microservice',

    component: UpdateMicroserviceComponent,

 },
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
