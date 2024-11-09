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
    return this.http.get('http://kalum-management-2024:5246/kalum-management/v1/carreras-tecnicas');
  }

  saveCarreraTecnica(body: any) {
    return this.http.post('http://kalum-management-2024:5246/kalum-management/v1/carreras-tecnicas', body);
  }

  editCarreraTecncia(body: any, id: any){
    return this.http.put(`http://localhost:5246/kalum-management/v1/carreras-tecnicas/${id}`, body);
  }

}
