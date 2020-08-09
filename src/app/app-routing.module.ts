import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
  loadChildren:() =>  import('./modules/principal/principal.module').then(c => c.PrincipalModule)
},
{
  path: 'usuario',
  loadChildren:() =>  import('./modules/usuario/usuario.module').then(c => c.UsuarioModule)
},

{
  path: 'abogado',
  loadChildren:() =>  import('./modules/abogado/abogado.module').then(c => c.AbogadoModule)
},

{
  path: 'cita',
  loadChildren:() =>  import('./modules/cita/cita.module').then(c => c.CitaModule)
},

{
  path: 'login',
  loadChildren:() =>  import('./modules/principal/components/login/login.component').then(c => c.LoginComponent)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
