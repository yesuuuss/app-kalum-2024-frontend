import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;

  public get token(): any {
    if(this._token != null){
      return this._token;
    } else if(this.token == null && localStorage.getItem('token') != null){
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

  saveToken(token: string): void {
    this._token = token;
    localStorage.setItem('token',token);
  }

}
