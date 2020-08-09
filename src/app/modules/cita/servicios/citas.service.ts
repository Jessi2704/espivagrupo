import { Injectable } from '@angular/core';
import {cita} from '../model/cita.interface';
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
export class CitasService {

  constructor(private http:HttpClient) { }

  getCita():Observable<cita>
  {
    return this.http.get<cita>('http://localhost:9090/citas/buscarcita');
  }


  deleteCita(cita:any, id:number){
    let json=JSON.stringify(cita);
    return this.http.delete('http://localhost:9090/citas/eliminarcita/'+ id);
  }


  addCita(cita: cita)
  {
    let json=JSON.stringify(cita);
    return this.http.post('http://localhost:9090/citas/agregarcita/', json,httpOptions);
  }

 
  }
