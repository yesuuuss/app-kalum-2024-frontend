import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;
  private _usuario: Usuario;

  public get usuario(): Usuario {
    if(this._usuario != null){
      return this._usuario;
    } else if(this._usuario == null && localStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(localStorage.getItem('usuario') as string) as Usuario;
      return this._usuario;
    } 
    return new Usuario();
  }

  public get token(): any {
    if(this._token != null){
      return this._token;
    } else if(this._token == null && localStorage.getItem('token') != null){
      this._token = JSON.stringify(localStorage.getItem('token') as string);
      return this._token;
    }
    return null;
  }

  constructor(private http: HttpClient) { }
  
  login(usuario: Usuario) : Observable<any> {
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost:5255/authkalum-management/v1/accounts/login',usuario, {headers: httpHeaders});
  }

  register(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:5255/authkalum-management/v1/users',usuario);
  }

  logout(): void {
    this._token = '';
    this._usuario == null;
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }


  saveToken(token: string): void {
    this._token = token;
    localStorage.setItem('token',token);
  }

  getToken(token: string): any{
    if(token && token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  saveUser(payload: any): void{
    this._usuario = new Usuario();
    this._usuario.username = payload.username;
    this._usuario.email = payload.email;
    this._usuario.identification = payload.identification;
    this.usuario.roles = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    localStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  isAuthenticated(): boolean {
    if(this.token != null){
      let payload = this.getToken(this.token);
      if(payload != null && payload.username && payload.username.length > 0){
        return true;
      }
    }
    return false;
  }

  hasRole(role: string): boolean{
    if(this.usuario.roles.includes(role)){
      return true;
    }
    return false;
  }

}
