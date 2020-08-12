import { Component, OnInit } from '@angular/core';
import {abogado} from '../../model/abogado.interface';
import {AbogadosService} from '../../servicios/abogados.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-abog-admin',
  templateUrl: './list-abog-admin.component.html',
  styleUrls: ['./list-abog-admin.component.css']
})
export class ListAbogAdminComponent implements OnInit {

 
  abogado:abogado;
  constructor(private abogadoservicio :AbogadosService, private router: Router) { }

  ngOnInit(): void {
    this.abogadoservicio.getAbogado().subscribe(data => this.abogado = data);
  }


  deleteAbogado(abogado:abogado, id: number ){
    this.abogadoservicio.deleteAbogado(abogado, id).subscribe(data => console.log(data));
    this.router.navigate(['/admin']);
  }

  editAbogado(abogadoid:number){
    this.router.navigate(['/abogado/modificar/', abogadoid]);
  }


  deshabilitarAbogado(abogado:abogado, id:number ){
    abogado.estado = "DESHABILITADO";
    this.abogadoservicio.editAbogado(abogado, id).subscribe(data => console.log(data));
  }
}

 