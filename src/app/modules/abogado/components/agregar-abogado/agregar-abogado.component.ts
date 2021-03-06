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
  Usuarioform : FormGroup;
  abogado:any;

  constructor(
    private abogadosService : AbogadosService,
    private formBuilder:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.Abogadosform = this.formBuilder.group({
    'cedula':[null, Validators.required,
                    Validators.minLength(10),
                    Validators.pattern(/^[0-9]*$/)],
    'nombre':[null, Validators.required,
                    Validators.minLength(5),
                    Validators.pattern(/^[a-zA-Z]*$/)],
    'estado': ['HABILITADO', Validators.required],
    'direccion':[null, Validators.required],
    'email':[null, Validators.required,
                   Validators.email],
    'celular':[null, Validators.required,
                    Validators.pattern(/^[0-9]*$/)],
    'profesion':[null, Validators.required],
    });
  }

  addAbogado (form : abogado){
    this.abogadosService.setAbogado(form).subscribe(data => 
    {
      this.abogado=data;
      this.router.navigate(['/usuario/agregar/', this.abogado.id_user]);
    }
    );
  }
}



  