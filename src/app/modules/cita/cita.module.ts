import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { CitaRoutingModule } from './cita-routing.module';
import { AgregarCitaComponent } from './components/agregar-cita/agregar-cita.component';
import { CitaUnabogadoComponent } from './components/cita-unabogado/cita-unabogado.component';
import { ListasCitasComponent } from './components/listas-citas/listas-citas.component';
import { ModificarCitasComponent } from './components/modificar-citas/modificar-citas.component';


@NgModule({
  declarations: [AgregarCitaComponent, CitaUnabogadoComponent, ListasCitasComponent, ModificarCitasComponent],
  imports: [
    CommonModule,
    CitaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CitaModule { }
