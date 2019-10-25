import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PreciosComponent } from '../components/precios/precios.component';
import { ProtegidaComponent } from '../components/protegida/protegida.component';
import { CallbackComponent } from '../components/callback/callback.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegida', component: ProtegidaComponent, canActivate: [AutenticadoService] },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

import { NgModule } from '@angular/core';
import { AutenticadoService } from '../services/autenticado.service';

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
