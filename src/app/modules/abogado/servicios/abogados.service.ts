import { Injectable } from '@angular/core';
import {abogado} from '../model/abogado.interface';
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
export class AbogadosService {

  constructor(private http:HttpClient) 
  { }
  getAbogado():Observable<abogado> //listar
  {
    return this.http.get<abogado>('http://localhost:9090/abogados/buscarabogado');
  }

  getAbogadoid(id: number){
    return this.http.get<abogado>('http://localhost:9090/abogados/buscarabogado/'+ id);
  }

  deleteAbogado(Abogado:any, id:number){//eliminiar
    let json=JSON.stringify(Abogado);
    return this.http.delete('http://localhost:9090/abogados/eliminarabogado/'+ id);
  }


  setAbogado(Abogado: abogado) //agregar
  {
    let json=JSON.stringify(Abogado);
    return this.http.post('http://localhost:9090/abogados/agregarabogado/', json,httpOptions);
  }


  editAbogado(abogado:any, ide:number){ //modificar
    let json=JSON.stringify(abogado);
    return this.http.put('http://localhost:9090/abogados/modificarabogado/' + ide, json,httpOptions);
  }

  }




