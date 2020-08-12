import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; 
import { Validators } from '@angular/forms';
import {usuario} from '../../../usuario/model/usuario.interface';
import {UsuariosService} from '../../../usuario/servicios/usuarios.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  ide:number;
  Usuarioform: FormGroup;
 
  constructor(
    private router: Router,
     private rout: ActivatedRoute,
    private formBuilder:FormBuilder,
    private usuarioService: UsuariosService
  ) { }

    ngOnInit(): void {
      this.ide = Number(this.rout.snapshot.paramMap.get('ide'));

      this.Usuarioform = this.formBuilder.group({
        'id_usuario':[null, Validators.required],
        'cedula_usuario':[null, Validators.required],
        'nombre_usuario':[null, Validators.required],
        'apodo':[null, Validators.required],
        'contrasenia':[null, Validators.required],
        
        }); 
      

    this.usuarioService.getUsuarioid(this.ide).subscribe(data => {
      this.f.cedula_usuario.setValue(data.cedula_usuario);
      this.f.nombre_usuario.setValue(data.nombre_usuario);
      this.f.apodo.setValue(data.apodo);
      this.f.contrasenia.setValue(data.contrasenia);
      
    })
  }
   get f() {return this.Usuarioform.controls;}


  editUsuario(form: usuario ): void {
    if(this.Usuarioform.valid){
      this.usuarioService.editUsuario(form, this.ide).subscribe(data => console.log(data));
      this.router.navigate(['/abogado/admin']);}
      else{
        //mensaje error
      }
  }

}