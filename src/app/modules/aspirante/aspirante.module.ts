import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspiranteRoutingModule } from './aspirante-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudEstudioFormComponent } from './components/solicitudes/solicitud-estudio-form.component';


@NgModule({
  declarations: [
    SolicitudEstudioFormComponent
  ],
  imports: [
    CommonModule,
    AspiranteRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AspiranteModule { }
