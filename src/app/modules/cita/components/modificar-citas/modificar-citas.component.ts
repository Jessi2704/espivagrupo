import { Component, OnInit } from '@angular/core';
import {cita} from '../../model/cita.interface';
import {CitasService} from '../../servicios/citas.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; 
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-modificar-citas',
  templateUrl: './modificar-citas.component.html',
  styleUrls: ['./modificar-citas.component.css']
})
export class ModificarCitasComponent implements OnInit {

  ide:number;
  Citaform: FormGroup;

  constructor(
     private CitasService: CitasService, 
     private router: Router,
     private rout: ActivatedRoute,
    private formBuilder:FormBuilder,) { }

    ngOnInit(): void {
      this.ide = Number(this.rout.snapshot.paramMap.get('ide'));

      this.Citaform = this.formBuilder.group({

        'id_cita':[null, Validators.required],
        'nombre_abogado':[null, Validators.required],
  'cedula_cliente':[null, Validators.required],
  'nombre_cliente':[null, Validators.required],
  'estado_cita':[null , Validators.required],
  'motivo_cita':[null, Validators.required],
  'cedula_abogado':[null, Validators.required],
  'fecha_inicio_cita':[null, Validators.required],
  'hora_fin_cita':[null, Validators.required],
  'hora_inicio_cita':[null, Validators.required],
  'lugar_cita':[null, Validators.required],
  
    });

    this.CitasService.getCitaid(this.ide).subscribe(data => {
      this.f.cedula_abogado.setValue(data.cedula_abogado);
      this.f.cedula_cliente.setValue(data.cedula_cliente);
      this.f.nombre_abogado.setValue(data.nombre_abogado);
      this.f.nombre_cliente.setValue(data.nombre_cliente);
      this.f.fecha_inicio_cita.setValue(data.fecha_inicio_cita);
      this.f.hora_inicio_cita.setValue(data.hora_inicio_cita);
      this.f.hora_fin_cita.setValue(data.hora_fin_cita);
      this.f.lugar_cita.setValue(data.lugar_cita);
      this.f.motivo_cita.setValue(data.motivo_cita);
      this.f.estado_cita.setValue(data.estado_cita);
     
    })
  }
   get f() {return this.Citaform.controls;}


  editCita(form: cita ): void {
   
      this.CitasService.editCita(form, this.ide).subscribe(data => console.log(data));
      this.router.navigate(['/cita']);}  
  }



