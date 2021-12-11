import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/character.service';
import { Characters } from 'src/app/model/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character : Characters [] = []
  characterName: string = "";
  // characterList: Characters [] = [];

  constructor(private characterService: CharacterService,  private route:Router) { }

  ngOnInit(): void {
    this.character = this.characterService.getCharacters();
  }

  characterSearchOnList(){
    if (this.characterName == "") {
      this.character = this.characterService.getCharacters();
    } else {
      this.characterName = this.characterName.toLowerCase();
      this.character = this.characterService.getCharacters();
      this.character = this.character.filter( c => c.id.startsWith(this.characterName) );
    }
  }

  goCharacterInfo(nombre : string){
    this.characterService.showCharacter(nombre)
    console.log
    this.route.navigateByUrl('info-character')
  }

  goCharacterInfo2(id : string) {
    this.route.navigateByUrl(`/info-character${id != undefined ? '/' + id : ''}`);
  }
}
