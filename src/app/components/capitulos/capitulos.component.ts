import { Component, OnInit } from '@angular/core';
import { CapsService } from 'src/app/services/caps.service'

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss']
})
export class CapitulosComponent implements OnInit {

  public title = 'RickMortyApp';
  public capitulos : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;

  constructor(private capsService : CapsService) {}

  ngOnInit() {
    this.getCapitulos();
  } 

  getCapitulos(page : number = 1) {
    this.capsService.obtenerEpisodios(page).subscribe(response => {
      this.capitulos = response.results
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x,i)=>i);
    })
  }

  search(event: any, n: number) {
    this.currentPage = n + 1;
    this.getCapitulos(this.currentPage);
  }
}
