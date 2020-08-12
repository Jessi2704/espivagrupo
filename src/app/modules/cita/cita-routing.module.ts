import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgregarCitaComponent} from './components/agregar-cita/agregar-cita.component'
import {CitaUnabogadoComponent} from './components/cita-unabogado/cita-unabogado.component';
import {ListasCitasComponent} from './components/listas-citas/listas-citas.component';
import { ModificarCitasComponent } from './components/modificar-citas/modificar-citas.component';

const routes: Routes = [
  {
    path:'agregar',
    component:AgregarCitaComponent
  },
  {
    path:'agrega/:ide',
    component:CitaUnabogadoComponent
  },
  {
    path:'listar',
    component:ListasCitasComponent
  },
  {
    path:'modificar/:ide',
    component:ModificarCitasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
