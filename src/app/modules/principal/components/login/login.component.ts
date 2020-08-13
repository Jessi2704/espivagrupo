import {usuario} from '../../../usuario/model/usuario.interface';
import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../usuario/servicios/usuarios.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuariosService,private routerLink:Router) { }
  user:usuario={
    cedula_usuario:'',
    nombre_usuario:'',
    apodo:'',
    contrasenia:'',
    id_usuario:9,
  }

  user2:usuario={
    cedula_usuario:'',
    nombre_usuario:'',
    apodo:'',
    contrasenia:'',
    id_usuario:9,
  }


  token:any;

  ngOnInit(){}

  ver() {
    this.usuarioService.getUsuarioid(this.user.id_usuario).subscribe(
      res=>{
        
        this.user2=res;
        if(this.user.apodo==this.user2.apodo && this.user.contrasenia==this.user2.contrasenia){
          alert('Datos exitosos!!');
          this.token = sessionStorage.setItem('token',this.user2.apodo);
          this.routerLink.navigate(['/administrador']);
        }else{
          alert('Usuario no encontrado');
        }
      },
      err=>{
        alert('Usuario no encontrado');
        console.error(err)
      }
    )  
  }
}

    
  

  

