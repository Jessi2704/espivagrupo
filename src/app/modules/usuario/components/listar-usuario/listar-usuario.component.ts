import { Component,OnInit } from '@angular/core';
import {usuario} from '../../model/usuario.interface';
import {UsuariosService} from '../../servicios/usuarios.service';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuario : usuario;
  constructor(private usuarioservicio :UsuariosService) { }

  ngOnInit(): void {
    this.usuarioservicio.getUsuario().subscribe(data => this.usuario = data);
  }

  deleteUsuario(usuario:usuario, id: number ){
    this.usuarioservicio.deleteUsuario(usuario, id).subscribe(data => console.log(data));
    location.reload();
  }
 
}
