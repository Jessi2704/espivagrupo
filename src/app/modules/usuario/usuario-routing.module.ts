import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import {AgregarUsuarioComponent} from './components/agregar-usuario/agregar-usuario.component';
import {AgregaradminComponent} from './components/agregaradmin/agregaradmin.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';

const routes: Routes = 
[
  {
    path:'',component:ListarUsuarioComponent
  },
  {
    path:'agregar/:ide',component:AgregarUsuarioComponent
  },
  {
    path:'modificar/:ide',component:ModificarUsuarioComponent
  },

  {
    path:'agregar',component:AgregaradminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
