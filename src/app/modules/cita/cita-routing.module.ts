import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgregarCitaComponent} from './components/agregar-cita/agregar-cita.component'

const routes: Routes = [
  {
    path:'agregar',
    component:AgregarCitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
