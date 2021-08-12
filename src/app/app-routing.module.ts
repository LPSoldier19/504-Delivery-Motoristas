import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EntregaComponent } from './components/entrega/entrega.component';
import {LoginComponent} from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component:MainComponent, canActivate:[AuthGuard]},
  { path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard]},
  { path: 'pedidos', component: PedidosComponent, canActivate:[AuthGuard]},
  { path: 'entrega', component: EntregaComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
