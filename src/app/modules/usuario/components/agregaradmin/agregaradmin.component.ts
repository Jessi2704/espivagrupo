import { Component, OnInit } from '@angular/core';
import {usuario} from '../../model/usuario.interface';
import {UsuariosService} from '../../servicios/usuarios.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-agregaradmin',
  templateUrl: './agregaradmin.component.html',
  styleUrls: ['./agregaradmin.component.css']
})
export class AgregaradminComponent implements OnInit {

  Usuarioform : FormGroup;
  constructor(
    private UsuarioService : UsuariosService,
  private formBuilder:FormBuilder,
  private router: Router) { }

  ngOnInit(): void {

    this.Usuarioform = this.formBuilder.group({
      'id_usuario':[null, Validators.required],
      'cedula_usuario':[null, Validators.required],
      'nombre_usuario':[null, Validators.required],
      'apodo':[null, Validators.required],
      'contrasenia':[null, Validators.required],
      
      }); 
    }


    addUsuario (form : usuario){
  this.UsuarioService.addUsuario(form).subscribe(data => console.log(data));
  this.router.navigate(['/usuario']);
}

}
