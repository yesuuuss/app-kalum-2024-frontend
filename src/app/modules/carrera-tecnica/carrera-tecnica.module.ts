import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraTecnicaRoutingModule } from './carrera-tecnica-routing.module';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarreraTecnicaComponent
  ],
  imports: [
    CommonModule,
    CarreraTecnicaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarreraTecnicaModule { }
