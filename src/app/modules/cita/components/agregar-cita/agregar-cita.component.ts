import { Component, OnInit } from '@angular/core';
import {cita}from '../../model/cita.interface';
import {CitasService} from '../../servicios/citas.service';
import {FormBuilder, FormGroup, NumberValueAccessor} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import {abogado} from '../../../abogado/model/abogado.interface';
import {AbogadosService} from '../../../abogado/servicios/abogados.service';


@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

ide: number;
  Citaform: FormGroup;
  abogado: abogado;


  constructor(
    private citasService : CitasService,
    private formBuilder:FormBuilder,
    private rout: ActivatedRoute,
    private AbogadosService: AbogadosService,
    private router: Router) { }

 
    ngOnInit(): void {

      this.AbogadosService.getAbogado().subscribe((data)=>{console.log(data);
      this.abogado=data;
    });

    this.Citaform = this.formBuilder.group({

      'id_cita':[null, Validators.required],
      'nulacion_cita':['no', Validators.required],
'cedula_abogado':[null, Validators.required],
'cedula_usuario':[null, Validators.required],
'fecha_fin_cita':['lunes', Validators.required],
'fecha_inicio_cita':[null, Validators.required],
'hora_fin_cita':[null, Validators.required],
'hora_inicio_cita':[null, Validators.required],
'lugar_cita':[null, Validators.required],
    
    });
    }


  addCita(form : cita){
    this.citasService.addCita(form).subscribe(data => console.log(data));
    this.router.navigate(['/cita/listar']);
  }
}