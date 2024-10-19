import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { AuthService } from '../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormLoginComponent } from './form-login.component';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormRegisterComponent {
  hide = true;
  usuario: Usuario = new Usuario();

  public formRegister: FormGroup;

  constructor(public dialog: MatDialog, private router: Router,  
      private formRegisterDialogRef: MatDialogRef<FormRegisterComponent>, 
        private formBuilder: FormBuilder, private authService: AuthService){
    this.formRegister = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      normalizedUserName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  create(): void {
    this.usuario.username = this.formRegister.get('username')?.value;
    this.usuario.email = this.formRegister.get('email')?.value;
    this.usuario.normalizedUserName = this.formRegister.get('normalizedUserName')?.value;
    this.usuario.password = this.formRegister.get('password')?.value;
    this.usuario.roles.push('ROLE_USER');
    this.authService.register(this.usuario).subscribe(response => {
      if(response.succeeded){
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada exitosamente',
          text: `La cuenta ${this.usuario.username} fue creada de forma exitosa`,
          footer: 'Kalum App v1.0.0'
        }).then(result => {
          if(result.isConfirmed){
            this.formRegisterDialogRef.close(1);
            this.dialog.open(FormLoginComponent, {width: '450px'});
          }
        });
      }

    }, error => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Crear cuenta',
        text: 'Existe un problema al momento de crear la cuenta',
        footer: 'Kalum v1.0.0'
      });
    });
  }

  cancel(): void {
    this.formRegisterDialogRef.close(0);
  }

}
