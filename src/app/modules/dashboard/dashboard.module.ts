import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { CarreraTecnicaModule } from '../carrera-tecnica/carrera-tecnica.module';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule, 
    UsuarioModule,
    CarreraTecnicaModule
  ]
})
export class DashboardModule { }
