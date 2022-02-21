import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalizacionesService {

  constructor(private httpClient: HttpClient) { }
  obtenerLocalizaciones():Observable<any> {
    return this.httpClient.get("https://rickandmortyapi.com/api/location");
  }
}
