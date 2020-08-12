import { Injectable } from '@angular/core';
import {usuario } from '../model/usuario.interface';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) 
  { }
  getUsuario():Observable<usuario>
  {
    return this.http.get<usuario>('http://localhost:9090/usuarios/buscarusuario');
  }

  deleteUsuario(usuario:any, id:number){
    let json=JSON.stringify(usuario);
    return this.http.delete('http://localhost:9090/usuarios/eliminarusuario'+ id);
  }
    
  getUsuarioid (id: number){
    return this.http.get<usuario>('http://localhost:9090/usuarios/buscarusuario'+ id);
  }

  addUsuario(usuario: usuario)
{
  let json=JSON.stringify(usuario);
  return this.http.post('http://localhost:9090/usuarios/agregarusuario', json,httpOptions);
}
editUsuario(usuario:any, ide:number){ //modificar
  let json=JSON.stringify(usuario);
  return this.http.put('http://localhost:9090/usuarios/modificarusuario/' + ide, json,httpOptions);
}



}











