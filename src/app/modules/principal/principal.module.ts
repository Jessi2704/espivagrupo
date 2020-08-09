import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [PaginaPrincipalComponent, LoginComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
