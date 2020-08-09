import { Component, OnInit, HostBinding } from '@angular/core';
import{abogado} from '../../model/abogado.interface';
import{AbogadosService} from'../../servicios/abogados.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-abogado',
  templateUrl: './agregar-abogado.component.html',
  styleUrls: ['./agregar-abogado.component.css']
})
export class AgregarAbogadoComponent implements OnInit {

  Abogadosform: FormGroup;



  constructor(
    private abogadosService : AbogadosService,
    private formBuilder:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.Abogadosform = this.formBuilder.group({
    'cedula':[null, Validators.required],
    'nombre':[null, Validators.required],
    'apellido':[null, Validators.required],
    'direccion':[null, Validators.required],
    'email':[null, Validators.required],
    'celular':[null, Validators.required],
    'profesion':[null, Validators.required],
    
    /*'ESTADO':['habilitado', Validators.required],*/
    });
  }

  addAbogado (form : abogado){
    this.abogadosService.setAbogado(form).subscribe(data => console.log(data));
    this.router.navigate(['/abogado/admin']);

  }
}

  