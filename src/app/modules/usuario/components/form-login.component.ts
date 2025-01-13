import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../shared/services/auth.service';
import { FormRegisterComponent } from './form-register.component';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public loginForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private dialogFormRegister: MatDialog, private authService: AuthService, private formBuilder: FormBuilder, private dialogLoginFormRef: MatDialogRef<FormLoginComponent>){
    this.loginForm = formBuilder.group({
      username: ['etumax',Validators.required],
      password: ['Inicio.2024',Validators.required]
    });
  }

  onLogin(): void {
    this.usuario.username = this.loginForm.get('username')?.value;
    this.usuario.password = this.loginForm.get('password')?.value;    
    this.authService.login(this.usuario).subscribe(response => {
      this.authService.saveToken(response.token);
      this.authService.saveUser(this.authService.getToken(this.authService.token));
      console.log(this.authService.isAuthenticated());
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
    });
  }

  onCancel(): void{
    this.dialogLoginFormRef.close(0);
  }

  openFormRegister(): void{
    const dialogFormRegisterRef = 
      this.dialogFormRegister.open(FormRegisterComponent, {width: '450px'});
    this.dialogLoginFormRef.close(2);
  }
  

}
