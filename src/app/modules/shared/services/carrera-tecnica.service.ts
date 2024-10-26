import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarreraTecnica } from '../../carrera-tecnica/models/carrera-tecnica';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {
  carrerasTecnicas: CarreraTecnica[] = [];

  constructor(private http: HttpClient) { }

  getCarrerasTecnicas(){
    const carreraTecnica = new CarreraTecnica();
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F9";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F0";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F1";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F2";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F3";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F4";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F5";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    carreraTecnica.carreraId = "3D7F5940-FEAD-47A9-AEFE-3B2E46D762F6";
    carreraTecnica.nombre = "Curso Full Stack con React & Java";
    this.carrerasTecnicas.push(carreraTecnica);
    const emitter: Observable<CarreraTecnica[]> = of(this.carrerasTecnicas);
    return emitter;
  }

}
