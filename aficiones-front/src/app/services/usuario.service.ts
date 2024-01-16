import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL:string = "http://localhost:8080/api/usuario"
  private httpHeader: HttpHeaders = new HttpHeaders ({'Content-Type' : 'application.json'});


  constructor(private http:HttpClient) { }

  guardarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.BASE_URL, usuario, {headers: this.httpHeader})
  }
}
