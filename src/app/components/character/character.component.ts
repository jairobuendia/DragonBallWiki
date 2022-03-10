import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/character';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  characterName: string = "";
  characters: Observable<Character[]>;

  characterForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    race: new FormControl(''),
    gender: new FormControl(''),
    bio: new FormControl(''),
    health: new FormControl(0),
    attack: new FormControl(0),
    defense: new FormControl(0),
    abilities: new FormControl(''),
    img: new FormControl(''),
  });

  formButtonText = 'Add character';
  displayCharacterForm = false;
  displayConfirmDelete = false;
  idForDeletion='';
  descriptionFormDeletion='';

  constructor(public characterService : CharacterService, private route: Router) {
    this.characters = this.characterService.getCharacters();
  }

  addCharacter() {
    this.characterService.addCharacter(this.characterForm.value);
    this.characterForm.reset({name: "", gender: "", race: "", health: 0, attack: 0, defense: 0, bio: "", abilities: "", img:"" });
  }


  openCreateForm(){
    this.characterForm.reset({name: "", gender: "", race: "", health: 0, attack:0, defense:0, bio: "", abilities: "", img:"" });
    this.formButtonText = 'Add character';
    this.displayCharacterForm = true;
  }

  updateCharacterStep1(id: string) {
   this.characterService.getCharacter(id).subscribe(
     data => {
       this.characterForm.patchValue(data);
       console.log("data: " + JSON.stringify(data));
     }
   );
  
   this.displayCharacterForm = true;
   this.formButtonText = "Update character";
  }

  updateCharacterStep2() {
    this.characterService.updateCharacter(this.characterForm.value);
  }

  formSubmit() {
    this.formButtonText === 'Add character' ?
      this.addCharacter() : this.updateCharacterStep2();
    this.displayCharacterForm = false;
  }

  confirmDeleteCharacter( character: Character){
    this.idForDeletion = character.id;
    this.descriptionFormDeletion = character.name;
    this.displayConfirmDelete = true;
  }

  deleteCharacter(){
    this.characterService.deleteCharacter(this.idForDeletion);
    this.displayConfirmDelete = false;
  }

  characterSearchOnList(){
    if (this.characterName == "") {
      this.characters = this.characterService.getCharacters();
    } else {
      this.characterName = this.characterName.toLowerCase();
      this.characters = this.characterService.getCharacters();
      // this.characters = this.characters.filter
    }
  }

  goCharacterInfo(id : string){
    this.route.navigateByUrl(`/info-character${id != undefined ? '/' + id : ''}`);
  }
  
  goHome(){
    this.route.navigateByUrl('')
  }
}
