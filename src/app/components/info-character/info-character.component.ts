import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/character.service';
import { Characters } from 'src/app/model/characters';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss'],
})
export class InfoCharacterComponent implements OnInit {
  data: any;
  display: boolean = false;
  character: Characters = {
    name: '',
    race: '',
    gender: '',
    bio: '',
    health: '',
    attack: '',
    defense: '',
    abilities: [],
    img: '',
    id: '',
  };

  constructor(
    private characterService: CharacterService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = {
      datasets: [
        {
          data: [this.getRandomStats(1,11), this.getRandomStats(1,11), this.getRandomStats(1,11)],
          backgroundColor: [
            '#f8bf01',
            '#8b000d',
            '#18cd4f',
          ],
          label: 'My dataset',
        },
      ],
      labels: ['Health', 'Attack', 'Defense'],
    };
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id != null) {
      this.character = this.characterService.getCharacter(id);
    }
  }

  getRandomStats(min : number, max : number) {
    return Math.random() * (max - min) + min;
  }

  showDialog() {
    this.display = true;
}
}
