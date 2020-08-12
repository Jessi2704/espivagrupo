import { Component, OnInit } from '@angular/core';
import {abogado} from '../../model/abogado.interface';
import {AbogadosService} from '../../servicios/abogados.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; 
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-modalabogados',
  templateUrl: './modalabogados.component.html',
  styleUrls: ['./modalabogados.component.css']
})
export class ModalabogadosComponent implements OnInit {
  ide:number;
  Abogadosform: FormGroup;

  constructor(
     private AbogadosService: AbogadosService, 
     private router: Router,
     private rout: ActivatedRoute,
    private formBuilder:FormBuilder,) { }

    ngOnInit(): void {
      this.ide = Number(this.rout.snapshot.paramMap.get('ide'));

      this.Abogadosform = this.formBuilder.group({
      'cedula':[null, Validators.required],
      'nombre':[null, Validators.required],
      'estado':[ null, Validators.required],
      'direccion':[null, Validators.required],
      'email':[null, Validators.required],
      'celular':[null, Validators.required],
      'profesion':[null, Validators.required],
    });

    this.AbogadosService.getAbogadoid(this.ide).subscribe(data => {
      this.f.cedula.setValue(data.cedula);
      this.f.nombre.setValue(data.nombre);
      this.f.estado.setValue(data.estado);
      this.f.direccion.setValue(data.direccion);
      this.f.email.setValue(data.email);
      this.f.celular.setValue(data.celular);
      this.f.profesion.setValue(data.profesion);
    })
  }
   get f() {return this.Abogadosform.controls;}


  editAbogado(form: abogado ): void {
    if(this.Abogadosform.valid){
      this.AbogadosService.editAbogado(form, this.ide).subscribe(data => console.log(data));
      this.router.navigate(['/abogado/admin']);}
      else{
        //mensaje error
      }
  }

}

