import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { CitaRoutingModule } from './cita-routing.module';
import { AgregarCitaComponent } from './components/agregar-cita/agregar-cita.component';


@NgModule({
  declarations: [AgregarCitaComponent],
  imports: [
    CommonModule,
    CitaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CitaModule { }
