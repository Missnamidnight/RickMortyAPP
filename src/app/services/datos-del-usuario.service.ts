import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosDelUsuarioService {

  constructor(private httpClient: HttpClient) { }

  
obtenerUsuario():Observable<any> {
    return this.httpClient.get("http://localhost:3000/user");
  }
}
