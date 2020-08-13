import { Component, OnInit } from '@angular/core';
import {cita}from '../../model/cita.interface';
import {CitasService} from '../../servicios/citas.service';
import {FormBuilder, FormGroup, NumberValueAccessor} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import {abogado} from '../../../abogado/model/abogado.interface';
import {AbogadosService} from '../../../abogado/servicios/abogados.service';

@Component({
  selector: 'app-cita-unabogado',
  templateUrl: './cita-unabogado.component.html',
  styleUrls: ['./cita-unabogado.component.css']
})
export class CitaUnabogadoComponent implements OnInit {
  ide: number;
  Citaform: FormGroup;
  abogado: abogado;

  constructor(
    private citasService : CitasService,
    private formBuilder:FormBuilder,
    private rout: ActivatedRoute,
    private AbogadosService: AbogadosService,
    private router: Router
  ) { }

    ngOnInit(): void {

      this.ide = Number(this.rout.snapshot.paramMap.get('ide'));
      

    this.Citaform = this.formBuilder.group({

      'id_cita':[null, Validators.required],
      'nombre_abogado':[null, Validators.required],
'cedula_cliente':[null, Validators.required],
'nombre_cliente':[null, Validators.required],
'estado_cita':['PENDIENTE', Validators.required],
'motivo_cita':[null, Validators.required],
'cedula_abogado':[null, Validators.required],
'fecha_inicio_cita':[null, Validators.required],
'hora_fin_cita':[null, Validators.required],
'hora_inicio_cita':[null, Validators.required],
'lugar_cita':[null, Validators.required],

    
    });

    this.AbogadosService.getAbogadoid(this.ide).subscribe((data)=>{
      this.abogado=data;
      this.f.cedula_abogado.setValue(data.cedula);
      this.f.nombre_abogado.setValue(data.nombre);
    })
    }
    get f(){return this.Citaform.controls;}


  addCita(form : cita){
    this.citasService.addCita(form).subscribe(data => console.log(data));
    this.router.navigate(['/abogado']);
  }
}