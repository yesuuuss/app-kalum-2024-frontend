import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarreraTecnicaService } from 'src/app/modules/shared/services/carrera-tecnica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrera-tecnica-form',
  templateUrl: './carrera-tecnica-form.component.html',
  styles: [
  ]
})
export class CarreraTecnicaFormComponent {

  titleForm: string = 'Agregar carrera Técnica';
  status: string = 'NEW';
  public carreraTecnicaForm: FormGroup;

  constructor(private dialogForm: MatDialogRef<CarreraTecnicaFormComponent>, @Inject(MAT_DIALOG_DATA) private data: any,
    private formGroup: FormBuilder, private carreraTecnicaService: CarreraTecnicaService) {
    this.carreraTecnicaForm = this.formGroup.group({
      carreraTecnica: ['', Validators.required]
    });

    if (data != null) {
      this.titleForm = 'Editar carrera técnica';
      this.status = 'EDIT';
      this.updateForm(data);
    }
  }

  updateForm(data: any): void {

    this.carreraTecnicaForm = this.formGroup.group({
      carreraTecnica: [data.carrera, Validators.required]
    });
  }

  onSave(): void {
    let carrera = {
      nombre: this.carreraTecnicaForm.get('carreraTecnica')?.value
    }
    if (status === 'NEW') {
      this.carreraTecnicaService.saveCarreraTecnica(carrera).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: "Carreras Técnicas",
            text: `La carrera ${response.nombre} se ha creado exitosamente`,
            icon: "success",
            footer: "Kalum v1.0.0"
          }).then(result => {
            if (result.isConfirmed) {
              this.dialogForm.close(1);
            }
          });
        },
        error: (error: any) => {
          Swal.fire({
            title: "Carreras Técnicas",
            text: `Ops!!! Hubo un error al momento de crear el recurso ${error}`,
            icon: "error",
            footer: "Kalum v1.0.0"
          }).then(result => {
            if (result.isConfirmed) {
              this.dialogForm.close(2);
            }
          });
        }
      });
    } else {
      this.carreraTecnicaService.editCarreraTecncia(carrera, this.data.carreraId).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: "Carreras Técnicas",
            text: `La carrera ${carrera.nombre} se ha actualizado exitosamente`,
            icon: "success",
            footer: "Kalum v1.0.0"
          }).then(result => {
            if (result.isConfirmed) {
              this.dialogForm.close(1);
            }
          });
        },
        error: (error: any) => {
          Swal.fire({
            title: "Carreras Técnicas",
            text: `Ops!!! Hubo un error al momento de actualizar el recurso ${error}`,
            icon: "error",
            footer: "Kalum v1.0.0"
          }).then(result => {
            if (result.isConfirmed) {
              this.dialogForm.close(2);
            }
          });
        }
      });
    }
  }


  onCancel(): void {
    this.dialogForm.close(0);
  }

}
