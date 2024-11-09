import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarreraTecnica } from '../../models/carrera-tecnica';
import { CarreraTecnicaService } from 'src/app/modules/shared/services/carrera-tecnica.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CarreraTecnicaFormComponent } from './carrera-tecnica-form.component';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { SolicitudEstudioFormComponent } from 'src/app/modules/aspirante/components/solicitudes/solicitud-estudio-form.component';

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

  constructor(public authService: AuthService, private carreraTecnicaService: CarreraTecnicaService, private dialogForm: MatDialog){

  }

  ngOnInit(): void {
    this.getCarrerasTecnicas();
  }

  openFormSolictudEstudio() : void {
    if(this.authService.isAuthenticated()) {
      if(this.authService.usuario.identification == '0'){
        this.dialogForm.open(SolicitudEstudioFormComponent, {width: '450px'});
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Carreras Técnicas',
        html: 'Debes iniciar sesión o crear una cuenta',
        footer: 'Kalum v1.0.0'
      });
    }
  }

  getCarrerasTecnicas(): void {
    this.carreraTecnicaService.getCarrerasTecnicas().subscribe(data => {
      this.getCarrerasTecnicasResponse(data);
    });
  }

  getCarrerasTecnicasResponse(data: any) : void {
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

  getOpenFormCarreraTecnica() : void {
    this.dialogForm.open(CarreraTecnicaFormComponent, {width: '450px'}).afterClosed().subscribe(result => {
      if(result == 1){
        this.getCarrerasTecnicas();
      }
    });;
    
  }

  editCarreraTecnica(carreraId: string, carrera: string): void {
    this.dialogForm.open(CarreraTecnicaFormComponent, {width: '450px', data: {carreraId: carreraId, carrera: carrera}})
      .afterClosed().subscribe(result => {
        if(result == 1){
          this.getCarrerasTecnicas();
        }
      });
  }


  deleteCarreraTenica(carreraId: any): void {
    Swal.fire({
      title: 'Carrera Técnica',
      text: '¿Está seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(response => {
      if(response.isConfirmed){
        Swal.fire('Carreras Técnicas', 'Registro eliminado', 'success');
      }
    });
  }


}
