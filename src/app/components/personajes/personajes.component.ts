import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})

export class PersonajesComponent implements OnInit {
  public title = 'RickyMortyApp';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;
  

  constructor(private characterService : CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  } 

  getCharacters(page : number = 1, name : string = "") {
    this.characterService.obtenerPersonajes(page, name).subscribe(response => {
      this.characters = response.results
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x,i)=>i);
    })
  }

  search(event: any, n: number) {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, this.q);
  }
}