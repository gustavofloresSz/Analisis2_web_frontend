import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { producto } from './interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl; // Utiliza el apiUrl del environment

  constructor(private http: HttpClient) {}

  get_usuarios(){
    return this.http.get(`${this.apiUrl}/clientes`);
  }

  add_usuarios(usuario: any){
    return this.http.post(`${this.apiUrl}/clientes`, usuario);
  }

  get_productos(){
    return this.http.get<producto[]>(`${this.apiUrl}/productos`);
  }

  add_productos(producto: any){
    return this.http.post(`${this.apiUrl}/productos`, producto);
  }

  get_ordenes(){
    return this.http.get(`${this.apiUrl}/ordenes`);
  }

  add_ordenes(ordenes: any){
    return this.http.post(`${this.apiUrl}/ordenes`, ordenes);
  }
}
