import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/character';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss']
})
export class InfoCharacterComponent implements OnInit {

  datos: any;
  display: boolean = false;
  character: Character = {
  } as Character;



  constructor(
    private characterService: CharacterService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id != null) {
    this.characterService.getCharacter(id).subscribe(data => {
       this.character = data;
       console.log(data.health)

       this.datos = {
        datasets: [
          {
            data: [data.health, data.attack, data.defense],
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
     });
    }
  }

  getRandomStats(min : number, max : number) {
    return Math.random() * (max - min) + min;
  }

  showDialog() {
    this.display = true;
}
}
