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
    
  }

  editAbogado(abogadoid:number){
    this.router.navigate(['/abogado/modificar/', abogadoid]);
  }


  deshabilitarAbogado(aboga:abogado, id:number ){
    aboga.estado = "DESHABILITADO";
    this.abogadoservicio.editAbogado(aboga, id).subscribe(data => console.log(data));
    location.reload();
  }

}

/*if(this.Abogadosform.valid){
  this.AbogadosService.editAbogado(form, this.ide).subscribe(data => console.log(data));
  this.router.navigate(['/abogado/listar']);}
  else{
    //mensaje error
  }*/