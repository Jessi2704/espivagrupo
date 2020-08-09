import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarAbogadoComponent} from './components/listar-abogado/listar-abogado.component';
import{AgregarAbogadoComponent} from './components/agregar-abogado/agregar-abogado.component';
import {ListAbogAdminComponent} from './components/list-abog-admin/list-abog-admin.component';
  import { from } from 'rxjs';

  const routes: Routes = 
[
  {
    path:'',component:ListarAbogadoComponent
  },

  {
    path:'Agregar',component:AgregarAbogadoComponent
  },

  {
    path:'admin', component:ListAbogAdminComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbogadoRoutingModule { }
