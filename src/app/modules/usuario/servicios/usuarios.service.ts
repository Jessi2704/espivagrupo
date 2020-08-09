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
    
}
