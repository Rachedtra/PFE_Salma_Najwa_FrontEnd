import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDeleteMicroserviceComponent } from './SittingMs/get-delete-microservice/get-delete-microservice.component';

const routes: Routes = [


  {
    path: 'Microservice',
    component: GetDeleteMicroserviceComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
