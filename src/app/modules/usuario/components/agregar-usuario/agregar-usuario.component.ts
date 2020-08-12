import { Component, OnInit } from '@angular/core';
import {usuario } from '../../model/usuario.interface';
import {UsuariosService} from '../../servicios/usuarios.service';
import {FormBuilder, FormGroup, NumberValueAccessor} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import {abogado} from '../../../abogado/model/abogado.interface';
import {AbogadosService} from '../../../abogado/servicios/abogados.service';
import { cita } from 'src/app/modules/cita/model/cita.interface';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  ide: number;
  Usuarioform:  FormGroup;
  cita :cita;
  abogado : abogado;

  constructor(
    private usuarioService : UsuariosService,
    private abogadoService : AbogadosService,
    private formBuilder:FormBuilder,
    private rout: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ide = Number(this.rout.snapshot.paramMap.get('ide'));
  
  this.Usuarioform = this.formBuilder.group({
    'cedula_usuario':[null, Validators.required],
    'nombre_usuario':[null, Validators.required],
    'apodo':[null, Validators.required],
    'contrasenia': [null, Validators.required]
  }),
  

    this.abogadoService.getAbogadoid(this.ide).subscribe((data)=>{
      this.abogado=data;
      this.f.cedula_usuario.setValue(data.cedula);
      this.f.nombre_usuario.setValue(data.nombre);
      this.f.contrasenia.setValue(data.cedula);
     
    })
  }
    
    get f(){return this.Usuarioform.controls;}


  addUsuario(form : usuario){
    this.usuarioService.addUsuario(form).subscribe(data => console.log(data));
    this.router.navigate(['']);
  }
}