import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraTecnicaRoutingModule } from './carrera-tecnica-routing.module';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarreraTecnicaFormComponent } from './components/carrera-tecnica/carrera-tecnica-form.component';
import { AspiranteModule } from '../aspirante/aspirante.module';


@NgModule({
  declarations: [
    CarreraTecnicaComponent,
    CarreraTecnicaFormComponent
  ],
  imports: [
    CommonModule,
    CarreraTecnicaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AspiranteModule
  ]
})
export class CarreraTecnicaModule { }
