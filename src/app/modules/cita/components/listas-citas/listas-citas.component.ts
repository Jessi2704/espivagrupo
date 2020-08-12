import { Component, OnInit } from '@angular/core';
import {cita} from '../../model/cita.interface';
import {CitasService } from '../../servicios/citas.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listas-citas',
  templateUrl: './listas-citas.component.html',
  styleUrls: ['./listas-citas.component.css']
})
export class ListasCitasComponent implements OnInit {

  cita : cita;
  constructor(
    private citasservice: CitasService ,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.citasservice.getCita().subscribe(data => this.cita = data)
  }


  deleteCita(cita:cita, id: number ){
    this.citasservice.deleteCita(cita, id).subscribe(data => console.log(data));
    this.router.navigate(['abogado']);
  }

  editCita(citaid:number){
    this.router.navigate(['/cita/modificar/', citaid]);
  }
}
