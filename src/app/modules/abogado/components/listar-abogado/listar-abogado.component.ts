import { Component,OnInit } from '@angular/core';
import {abogado} from '../../model/abogado.interface';
import {AbogadosService} from '../../servicios/abogados.service';
@Component({
  selector: 'app-listar-abogado',
  templateUrl: './listar-abogado.component.html',
  styleUrls: ['./listar-abogado.component.css']
})
export class ListarAbogadoComponent implements OnInit {

  abogado:abogado;
  constructor(private abogadoservicio :AbogadosService) { }

  ngOnInit(): void {
    this.abogadoservicio.getAbogado().subscribe(data => this.abogado = data);
  }

}
