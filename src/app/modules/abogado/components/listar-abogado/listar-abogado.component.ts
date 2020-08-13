import { Component,OnInit } from '@angular/core';
import {abogado} from '../../model/abogado.interface';
import {AbogadosService} from '../../servicios/abogados.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-abogado',
  templateUrl: './listar-abogado.component.html',
  styleUrls: ['./listar-abogado.component.css']
})
export class ListarAbogadoComponent implements OnInit {

  abogadoid: number;
  abogado:abogado;
  constructor(private abogadoservicio :AbogadosService, private router: Router) { }

  ngOnInit(): void {
    this.abogadoservicio.getAbogado().subscribe(data => this.abogado = data);
  }
  
  Cita(abogadoid: number){
    this.router.navigate(['/cita/agregar/', abogadoid]);
  }
}