import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarreraTecnica } from '../../models/carrera-tecnica';
import { CarreraTecnicaService } from 'src/app/modules/shared/services/carrera-tecnica.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-carrera-tecnica',
  templateUrl: './carrera-tecnica.component.html',
  styles: [
  ]
})
export class CarreraTecnicaComponent implements OnInit {

  public lengthPage: number = 0;
  
  displayColumns: string[] = ['number','carrera','acciones']

  dataSource = new MatTableDataSource<CarreraTecnica>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private carreraTecnicaService: CarreraTecnicaService){

  }

  ngOnInit(): void {
    this.getCarrerasTecnicas();
  }

  getCarrerasTecnicas() {
    this.carreraTecnicaService.getCarrerasTecnicas().subscribe(data => {
      this.getCarrerasTecnicasResponse(data);
    });
  }

  getCarrerasTecnicasResponse(data: any){
    const dataCarreraTecnica: CarreraTecnica[] = [];
    let listCarreraTecnica = data;
    let number = 1;
    listCarreraTecnica.forEach((elemento: CarreraTecnica) => {      
      let row = {...elemento, 'number': number++}
      dataCarreraTecnica.push(row);      
    });
    console.log(dataCarreraTecnica);
    this.dataSource = new MatTableDataSource<CarreraTecnica>(dataCarreraTecnica);  
    this.lengthPage = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }
}
