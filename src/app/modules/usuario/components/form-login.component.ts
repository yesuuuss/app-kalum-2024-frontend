import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public loginForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private dialogLoginFormRef: MatDialogRef<FormLoginComponent>){
    this.loginForm = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onLogin(): void {
    this.usuario.username = this.loginForm.get('username')?.value;
    this.usuario.password = this.loginForm.get('password')?.value;
    
    this.authService.login(this.usuario).subscribe(response => {
      this.authService.saveToken(response.token);
    });

    if(this.usuario.username === 'etumax' && this.usuario.password === 'Guatemala'){
      Swal.fire({
        title: "Login",
        text: `Bienvenido a KalumApp ${this.usuario.username}`,
        icon: "success",
        footer: "Kalum v1.0.0"      
      }).then(response => {
        if(response.isConfirmed){
          this.dialogLoginFormRef.close(1);
        }
      });
    } else {
      Swal.fire({
        title: "Login",
        text: `Credenciales incorrectas, favor de validar de nuevo`,
        icon: "error",
        footer: "Kalum v1.0.0"
      })
    }
  }

  onCancel(): void{
    this.dialogLoginFormRef.close(0);
  }
  

}
