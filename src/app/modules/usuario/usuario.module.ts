import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';


@NgModule({
  declarations: [ListarUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
