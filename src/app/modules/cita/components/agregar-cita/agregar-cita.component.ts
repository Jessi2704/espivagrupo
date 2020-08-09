import { Component, OnInit } from '@angular/core';
import {cita}from '../../model/cita.interface';
import {CitasService} from '../../servicios/citas.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {


  Citaform: FormGroup;


  constructor(
    private citasService : CitasService,
    private formBuilder:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.Citaform = this.formBuilder.group({

      'id_cita':[null, Validators.required],
      'nulacion_cita':['no', Validators.required],
'cedula_abogado':[null, Validators.required],
'cedula_usuario':[null, Validators.required],
'fecha_fin_cita':[null, Validators.required],
'fecha_inicio_cita':[null, Validators.required],
'hora_fin_cita':[null, Validators.required],
'hora_inicio_cita':[null, Validators.required],
'lugar_cita':[null, Validators.required],
    
    });
  }

  addCita (form : cita){
    this.citasService.addCita(form).subscribe(data => console.log(data));
    this.router.navigate(['/cita']);
  }
}
