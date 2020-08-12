import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { AgregaradminComponent } from './components/agregaradmin/agregaradmin.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';


@NgModule({
  declarations: [ListarUsuarioComponent, AgregarUsuarioComponent, AgregaradminComponent, ModificarUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
