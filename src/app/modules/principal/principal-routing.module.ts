import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path:'',component:PaginaPrincipalComponent
  },

  {
    path:'login', component:LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
