import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { AbogadoRoutingModule } from './abogado-routing.module';
import { ListarAbogadoComponent } from './components/listar-abogado/listar-abogado.component';
import { AgregarAbogadoComponent } from './components/agregar-abogado/agregar-abogado.component';
import { ListAbogAdminComponent } from './components/list-abog-admin/list-abog-admin.component';
import { ModalabogadosComponent } from './components/modalabogados/modalabogados.component';


@NgModule({
  declarations: [ListarAbogadoComponent, AgregarAbogadoComponent, ListAbogAdminComponent, ModalabogadosComponent],
  imports: [
    CommonModule,
    AbogadoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AbogadoModule { }
