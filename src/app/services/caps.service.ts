import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CapsService {
  private BASE_URL = "https://rickandmortyapi.com/api/";

  constructor(private http : HttpClient) { }

  obtenerEpisodios(page : number = 1) {
    return this.http.get<any>(this.BASE_URL + `episode?page=${page}`, {})
  }
}
