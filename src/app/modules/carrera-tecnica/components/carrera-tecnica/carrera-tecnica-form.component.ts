import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carrera-tecnica-form',
  templateUrl: './carrera-tecnica-form.component.html',
  styles: [
  ]
})
export class CarreraTecnicaFormComponent {

  titleForm: string = 'Agregar carrera Técnica';
  public carreraTecnicaForm: FormGroup;

  constructor(private dialogForm: MatDialogRef<CarreraTecnicaFormComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private formGroup: FormBuilder){
    this.carreraTecnicaForm = this.formGroup.group({
      carreraTecnica: ['',Validators.required]
    });

    if(data != null){
      this.titleForm = 'Editar carrera técnica';
      this.updateForm(data);
    }
  }

  updateForm(data: any): void {
    
    this.carreraTecnicaForm = this.formGroup.group({
      carreraTecnica: [data.carrera,Validators.required]
    });
  }

  onCancel() : void {
    this.dialogForm.close(0);
  }

}
